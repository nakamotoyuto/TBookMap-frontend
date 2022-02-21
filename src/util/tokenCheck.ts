import { useRouter } from "next/router";
import Cookies from 'js-cookie';

type TokenCheckType = {
  (path: string): void | string
}

export const tokenCheck: TokenCheckType = (path) => {
  const router = useRouter();
  //Cookieのチェック（これをいろいろ認証タイプにより変更）
  const token = Cookies.get("sansakuToken");
  if (token === undefined) {
    router.replace(path);
    return;
  }
  return token;
};