// src/__mocks__/axios.test.ts

import axios from 'axios';

describe('Axios Mock', () => {
  it('should mock axios.get correctly', async () => {
    (axios.get as jest.Mock).mockResolvedValueOnce({ data: { success: true } });

    const response = await axios.get('/test-endpoint');

    expect(axios.get).toHaveBeenCalledWith('/test-endpoint');
    expect(response.data.success).toBe(true);
  });

  it('should mock axios.post correctly', async () => {
    (axios.post as jest.Mock).mockResolvedValueOnce({ data: { created: true } });

    const response = await axios.post('/create-endpoint', { name: 'Test' });

    expect(axios.post).toHaveBeenCalledWith('/create-endpoint', { name: 'Test' });
    expect(response.data.created).toBe(true);
  });
});
