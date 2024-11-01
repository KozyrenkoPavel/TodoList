import { useContext } from 'react';
import { UserContext } from '../hoc/UserProvider';

export function useUser() {
  return useContext(UserContext);
}
