import React, { Component } from "react";
import { Admin, Resource, EditGuesser } from "react-admin";
import { UserEdit } from '../users';
import jsonServerProvider from "ra-data-json-server";

const dataProvider =
  jsonServerProvider("https://jsonplaceholder.typicode.com/");

class adminPage extends React.Component {
  render() {
    return (
      <Admin dataProvider={dataProvider}>
        <Resource
          name="users"
          list={UserEdit}
          edit={EditGuesser}
        />
      </Admin>
    );
  }
}
export default adminPage;
