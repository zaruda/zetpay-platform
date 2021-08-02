import axios, { AxiosInstance } from 'axios';

class Host2HostService {
  private readonly baseUrl: string;
  private readonly client: AxiosInstance;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;

    this.client = axios.create({
      baseURL: baseUrl
    });
  }

  public async getFormToken(sessionId: string) {
    return await this.client.post('/h2h_data', { session_id: sessionId });
  }
}

export default Host2HostService;
