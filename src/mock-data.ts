export interface Livre {
  title: string;
  user: string;
  status: 'pending' | 'confirmed' | 'rejected';
  cover: string;
}
export const livres = [
  {
    cover: 'assets/téléchargement.jpeg',
    title: 'Atomic Habits',
    user: 'Youssri Dali',
    status: 'pending',
  },
  {
    cover: 'assets/téléchargement.jpeg',
    title: 'Atomic Habits',
    user: 'Ameni ben Moussa',
    status: 'confirmed',
  },
  {
    cover: 'assets/téléchargement.jpeg',
    title: 'Atomic Habits',
    user: 'Lemjed Mrad',
    status: 'rejected',
  },
];
