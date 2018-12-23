
export default function (Profiles) {

  const usersResolvers = {
    Users: {
      profile: (user) => {
        return Users.find({ query: { _id: user.owner }}).then(result=>result.data[0]);
      }
    }
  };

  return usersResolvers;
}
