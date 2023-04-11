export const routeToHomePage = () => {
  return `/`;
};

export const routeToMyPage = () => {
  return `/my-page`;
};

export const routeToWritePage = () => {
  return `/write`;
};

export const routeToEditPage = (postId: string) => {
  return `/write?id=${postId}`;
};
