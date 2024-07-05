import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { MealsList } from "./meals/MealsList";
import { MealsCreate } from "./meals/MealsCreate";
import { MealsEdit } from "./meals/MealsEdit";
import { MealsShow } from "./meals/MealsShow";
import { BuildingsList } from "./buildings/BuildingsList";
import { BuildingsCreate } from "./buildings/BuildingsCreate";
import { BuildingsEdit } from "./buildings/BuildingsEdit";
import { BuildingsShow } from "./buildings/BuildingsShow";
import { CommentsList } from "./comments/CommentsList";
import { CommentsCreate } from "./comments/CommentsCreate";
import { CommentsEdit } from "./comments/CommentsEdit";
import { CommentsShow } from "./comments/CommentsShow";
import { LikesList } from "./likes/LikesList";
import { LikesCreate } from "./likes/LikesCreate";
import { LikesEdit } from "./likes/LikesEdit";
import { LikesShow } from "./likes/LikesShow";
import { PaymentsList } from "./payments/PaymentsList";
import { PaymentsCreate } from "./payments/PaymentsCreate";
import { PaymentsEdit } from "./payments/PaymentsEdit";
import { PaymentsShow } from "./payments/PaymentsShow";
import { ChatsList } from "./chats/ChatsList";
import { ChatsCreate } from "./chats/ChatsCreate";
import { ChatsEdit } from "./chats/ChatsEdit";
import { ChatsShow } from "./chats/ChatsShow";
import { UsersList } from "./users/UsersList";
import { UsersCreate } from "./users/UsersCreate";
import { UsersEdit } from "./users/UsersEdit";
import { UsersShow } from "./users/UsersShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"FoodieV2"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Meals"
          list={MealsList}
          edit={MealsEdit}
          create={MealsCreate}
          show={MealsShow}
        />
        <Resource
          name="Buildings"
          list={BuildingsList}
          edit={BuildingsEdit}
          create={BuildingsCreate}
          show={BuildingsShow}
        />
        <Resource
          name="Comments"
          list={CommentsList}
          edit={CommentsEdit}
          create={CommentsCreate}
          show={CommentsShow}
        />
        <Resource
          name="Likes"
          list={LikesList}
          edit={LikesEdit}
          create={LikesCreate}
          show={LikesShow}
        />
        <Resource
          name="Payments"
          list={PaymentsList}
          edit={PaymentsEdit}
          create={PaymentsCreate}
          show={PaymentsShow}
        />
        <Resource
          name="Chats"
          list={ChatsList}
          edit={ChatsEdit}
          create={ChatsCreate}
          show={ChatsShow}
        />
        <Resource
          name="Users"
          list={UsersList}
          edit={UsersEdit}
          create={UsersCreate}
          show={UsersShow}
        />
      </Admin>
    </div>
  );
};

export default App;
