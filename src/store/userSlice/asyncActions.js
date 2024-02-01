import { createAsyncThunk } from '@reduxjs/toolkit';
import { UserRepository } from '../../connectors/repositories/user';

export const getProfile = createAsyncThunk('profile/getProfile', async (account) => {
  const search = await UserRepository.search({ column: 'address', value: account });
  const settings = await UserRepository.getSettings();

  if (search?.id !== settings?.id) {
    return {
      ...search,
    };
  }

  return {
    ...search,
    ...settings,
  };
});
