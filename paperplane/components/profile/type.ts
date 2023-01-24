import { interest } from '../signup/types';

export interface profileInfo {
  email: string;
  id: number;
  isPopularLetterEmail: boolean;
  isPopularLetterWeb: boolean;
  isReadEmail: boolean;
  isReadWeb: boolean;
  isRepliedEmail: boolean;
  isRepliedWeb: boolean;
  name: string;
  profileImageUrl: string;
  userGroups: [];
  userInterests: interest[];
}

export const initialprofileInfo = {
  email: '',
  id: 0,
  isPopularLetterEmail: false,
  isPopularLetterWeb: false,
  isReadEmail: false,
  isReadWeb: false,
  isRepliedEmail: false,
  isRepliedWeb: false,
  name: '',
  profileImageUrl: '',
  userGroups: [],
  userInterests: [],
};
