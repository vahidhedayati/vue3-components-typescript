import useApi from "./api";
import { Ref, ref } from "vue";


export interface rawValue {
  page: string,
  per_page: string,
  total: string
}
export interface userObject {
  id: number,
  email: string,
  first_name: string,
  last_name: string,
  avatar: string
}
export interface User {
  _rawValue: rawValue,
  data: userObject[]
}

export type userList = Promise<{ userListing: Ref<User | undefined> }>;

export default async function users(): userList {
  const { response: userListing, request } = useApi<User>(
    "https://reqres.in/api/users"
  );

  const loaded = ref(false);

  if (loaded.value === false) {
    console.log('getting users ' + new Date())
    await request();
    loaded.value = true;
  }

  return { userListing };
}
