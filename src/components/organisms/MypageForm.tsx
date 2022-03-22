import React, { useEffect } from "react";

import { FormControl } from "@chakra-ui/form-control";
import { Box, HStack } from "@chakra-ui/layout";
import { Radio, RadioGroup, useRadioGroup } from "@chakra-ui/radio";
import { Select } from "@chakra-ui/select";
import { css } from "@emotion/react";

import { HistoryItem } from "../../enum/history";
import { occupation } from "../../enum/occupation";
import { UserUpdateParams } from "../../types/formParams";
import { FormDefaultValueWrap } from "../common/form/FormWrap";
import { InputDom } from "../common/form/InputDom";
import { InputLabel } from "../common/InputLabel";
import { Title } from "../common/Title";
import { useMypage } from "../hooks/useMypage";
import { Button } from "@chakra-ui/button";
import { usePatchProfile } from "../hooks/usePatchProfile";
// Container層
const MypageFormContainer = () => {
  const [isLoading, userData] = useMypage();
  const [isSubmitLoading, onUpdateSubmit, error] = usePatchProfile();
  const onSubmit = (data: UserUpdateParams) => {
    onUpdateSubmit(data);
  };
  if (isLoading) return <div>loadingnow</div>;
  if (userData) {
    const defaultValues = {
      email: userData.email,
      password: userData.password,
      userinfo: {
        name: userData.userInfo.name,
        history: userData.userInfo.history,
        occupation: userData.userInfo.occupation
      }
    };
    return <MypageFormDom data={defaultValues} onSubmit={onSubmit} submitLoading={isSubmitLoading}/>;
  }
  return <></>;
};

const MypageFormDom = ({data, onSubmit, submitLoading}: { data: UserUpdateParams, onSubmit: (data: UserUpdateParams) => void, submitLoading: boolean }) => {
  return (
    <Box p="100px 0">
      <Box m="auto" p="16" maxWidth="700px" borderRadius={`10px`} border="1px" borderColor="#B2B2B2" boxShadow={"xl"}>
      <Title title="Profile"/>
        <FormControl>
          <FormDefaultValueWrap<UserUpdateParams> onSubmit={onSubmit} defaultValues={data}>
            {({ register }) => (
              <Box d="flex" flexDirection="column" css={css`gap: 20px 0;`}>
                <div>
                  <InputLabel forText="name" text="お名前" />
                  <InputDom
                    id="name"
                    type="text"
                    placeholder="名前"
                    regist={register("userinfo.name")}
                  />
                </div>
                <div>
                  <InputLabel forText="email" text="emailaddress" />
                  <InputDom
                    id="email"
                    type="email"
                    placeholder="メールアドレスを入力してください"
                    regist={register("email", {
                      required: "メールアドレスは必須です。", pattern: {
                        value: /^([a-zA-Z0-9])+([a-zA-Z0-9\._+-])*@([a-zA-Z0-9_-])+([a-zA-Z0-9\._-]+)+$/,
                        message: "メールアドレスの形式が間違っています"
                      }
                    })}
                />
                </div>
                <div>
                  <InputLabel forText="password" text="password" />
                  <InputDom
                    id="password"
                    type="password"
                    placeholder="パスワードを入力してください"
                    regist={register("password",
                      { required: true, pattern: /^[a-z\d]{2,100}$/i })
                    }
                  />
                </div>
                <div>
                  <InputLabel forText="history" text="エンジニア歴" />
                  <RadioGroup>
                    <HStack spacing="24px">
                      {
                        HistoryItem.map((item) => {
                          return (
                            <Radio {...register("userinfo.history")}
                              key={item.id}
                              value={item.id}>
                              {item.name}
                            </Radio>
                          );
                        })
                      }
                    </HStack>
                  </RadioGroup>
                </div>
                <div>
                  <Select
                    {...register("userinfo.occupation")}
                    placeholder="職歴"
                  >
                    {
                      occupation.map((item) => {
                        return (
                          <option key={ item.name} value={item.id}>{item.name}</option>
                        );
                      })
                    }
                  </Select>
                </div>
                <div className="flex justify-end">
                  <Button
                    isLoading={submitLoading}
                    type="submit"
                    maxWidth={250}
                    backgroundColor={`#EB7F31`}
                    color={`#ffffff`}
                  >
                    保存
                  </Button>
                </div>
            </Box>
          )}
          </FormDefaultValueWrap>
        </FormControl>
        </Box>
    </Box>
  );
};

export const MypageForm = () => (
  <MypageFormContainer />
);
