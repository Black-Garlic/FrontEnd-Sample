import { useEffect } from "react";
import { useLazySendLoginTokenQuery } from "@services/common/commonApi";
import { useAppDispatch } from "@store/config";
import { setUser } from "@services/common/commonSlice";

const RedirectPage = () => {
  const dispatch = useAppDispatch();

  const [trigger, { data: login }] = useLazySendLoginTokenQuery();

  useEffect(() => {
    const loginType = window.location.pathname.split("/")[2];
    const code = window.location.search.split("&")[0].split("?code=")[1];

    trigger(`loginType=${loginType}&code=${code}`);
  }, [trigger]);

  useEffect(() => {
    if (!login) return;

    console.log(login);

    dispatch(setUser(login));
    window.location.replace("/");
  }, [dispatch, login]);

  return <></>;
};

export default RedirectPage;
