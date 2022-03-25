import axios, { AxiosInstance } from 'axios';
import { emptyBoard, isCharacters } from './shared';
import { Subscription, SubscriptionsResponse, VestaContent, Viewer } from './types';

export interface VestaCreds {
  key: string;
  secret: string;
}

// disabling linting here bc i might add stuffs later
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface VestaOptions extends VestaCreds {}

export class Vesta {
  private api: AxiosInstance;
  private readonly url = 'https://platform.vestaboard.com';
  public constructor({ key, secret }: VestaOptions) {
    this.api = axios.create({ headers: { 'X-Vestaboard-Api-Key': key, 'X-Vestaboard-Api-Secret': secret } });
  }

  public async getViewer(): Promise<Viewer> {
    const res = (await this.api.get(`${this.url}/viewer`)) as { data: Viewer };
    return res.data;
  }

  public async getSubscriptions(): Promise<Subscription[]> {
    const res = (await this.api.get(`${this.url}/subscriptions`)) as { data: SubscriptionsResponse };
    return res.data.subscriptions;
  }

  public async clearBoard(subscriptionId: string) {
    await this.api.post(`${this.url}/subscriptions/${subscriptionId}/message`, { characters: emptyBoard });
  }

  public async clear() {
    const subscriptions = await this.getSubscriptions();
    for (const subscription of subscriptions) {
      await this.clearBoard(subscription._id);
    }
  }

  public async setBoard(subscriptionId: string, content: VestaContent) {
    const body = isCharacters(content) ? { characters: content } : { text: content };
    await this.api.post(`${this.url}/subscriptions/${subscriptionId}/message`, body);
  }

  public async setBoards(content: VestaContent) {
    const subscriptions = await this.getSubscriptions();
    for (const subscription of subscriptions) {
      await this.setBoard(subscription._id, content);
    }
  }
}
