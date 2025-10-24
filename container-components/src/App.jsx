import { CurrentUserLoader } from "./CurrentUserLoader";
import { ResourceLoader } from "./ResourceLoader";
import { UserInfo } from "./UserInfo";
import { UserLoader } from "./UserLoader";

function App() {
  return (
    // <>
    // <UserLoader userId="345">
    //   <UserInfo />
    // </UserLoader>
    // <UserLoader userId="234">
    //   <UserInfo />
    // </UserLoader>
    // <UserLoader userId="123">
    //   <UserInfo />
    // </UserLoader>
    // </>
    <>
      <ResourceLoader>
        ResourceUrl={`/api/users/345`}
        resourceName="user"
        <UserInfo />
      </ResourceLoader>
    </>
  );
}

export default App;
