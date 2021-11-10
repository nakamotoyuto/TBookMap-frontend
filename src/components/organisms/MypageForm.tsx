import React, { useEffect } from 'react'

import { FormControl } from '@chakra-ui/form-control';
import { Box, HStack } from '@chakra-ui/layout';
import { useRadioGroup } from '@chakra-ui/radio';
import { Select } from '@chakra-ui/select';
import { css } from '@emotion/react'

import { HistoryItem } from '../../enum/history';
import { occupation } from '../../enum/occupation';
import { UserUpdateParams } from '../../types/formParams';
import { FormDefaultValueWrap } from '../atoms/FormWrap';
import { InputDom } from '../atoms/InputDom';
import { InputLabel } from '../atoms/InputLabel';
import { RadioCard } from '../atoms/RadioCard';
import { Title } from '../atoms/Title';
import { useMypage } from '../modules/customhooks/useMypage';

const MypageFormContainer = () => {
  const [isLoading, userData] = useMypage()

  const onSubmit = () => {

  }

  if (isLoading) return <div>loadingnow</div>
  if (userData) {
    const defaultValues = {
      user: {
        email: userData.email,
        password: userData.password,
        userInfo: {
          name: userData.userInfo.name,
          history: userData.userInfo.history,
          occupation: userData.userInfo.occupation
        }
      }
    }
    return <MypageFormDom data={defaultValues} onSubmit={ onSubmit}/>
  }
  return <></>
}

const MypageFormDom = ({data, onSubmit}: { data: UserUpdateParams, onSubmit: any }) => {
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "history",
  })
  const group = getRootProps()
  return (
    <Box p="100px 0">
      <Box m="auto" p="16" maxWidth="700px" borderRadius={`10px`} border="1px" borderColor="#B2B2B2" boxShadow={'xl'}>
      <Title title="Profile"/>
      <FormControl>
          <FormDefaultValueWrap<UserUpdateParams> onSubmit={onSubmit} defaultValues={data}>
            {({ register }) => (
              <Box d="flex" flexDirection="column" css={css`gap: 20px 0;`}>
                <Box>
                  <InputLabel forText="name" text="お名前" />
                  <InputDom
                    id="name"
                    type="text"
                    placeholder="名前"
                    regist={register("user.userInfo.name")}
                  />
                </Box>
                <Box>
                  <InputLabel forText="email" text="emailaddress" />
                  <InputDom
                    id="email"
                    type="email"
                    placeholder="メールアドレスを入力してください"
                    regist={register("user.email", {
                      required: "メールアドレスは必須です。", pattern: {
                        value: /^([a-zA-Z0-9])+([a-zA-Z0-9\._+-])*@([a-zA-Z0-9_-])+([a-zA-Z0-9\._-]+)+$/,
                        message: "メールアドレスの形式が間違っています"
                      }
                    })}
                  />
                </Box>
                <Box>
                  <InputLabel forText="password" text="password" />
                  <InputDom
                    id="password"
                    type="password"
                    placeholder="パスワードを入力してください"
                    regist={register("user.password",
                      { required: true, pattern: /^[a-z\d]{2,100}$/i })
                    }
                  />
                </Box>
                <Box>
                  <InputLabel forText="history" text="エンジニア歴" />
                  <HStack {...group}>
                    {
                      HistoryItem.map((item) => {
                        const radio = getRadioProps( { item } )
                        return (
                          <RadioCard key={item.id} {...radio}>
                            {item.name}
                          </RadioCard>
                        )
                      })
                    }
                  </HStack>
                </Box>
                <Box>
                  <Select placeholder="職歴">
                    {
                      occupation.map((item) => {
                        return (
                          <option key={ item.name}value={item.id}>{item.name}</option>
                        )
                      })
                    }
                  </Select>
                </Box>
            </Box>
          )}
          </FormDefaultValueWrap>
        </FormControl>
        </Box>
    </Box>
  )
}

export const MypageForm = () => (
  <MypageFormContainer />
)
