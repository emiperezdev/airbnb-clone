import useUserState from "../states/useUserState";

export const IndexPage = () => {
  const user = useUserState(s => s.user);

  return (
    <>
      <div>Index Page</div>
      <h1>Name: {user.name}</h1>
    </>
  );
};
