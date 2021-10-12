import { ReactElement } from 'react';
import { Box, SimpleGrid, Icon, Text, Stack, Flex, useMediaQuery } from '@chakra-ui/react';
import { FcReading, FcDonate, FcRating } from 'react-icons/fc';

interface FeatureProps {
  title: string;
  text: string;
  icon: ReactElement;
}

const Feature = ({ title, text, icon }: FeatureProps) => {
  return (
    <Stack>
      <Flex
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        color={'white'}
        rounded={'full'}
        bg={'gray.100'}
        mb={1}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={'gray.600'}>{text}</Text>s
    </Stack>
  );
};

export default function KvColumns() {
  return (
    <Box p={4} mb="6">
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <Feature
          icon={<Icon as={FcReading} w={10} h={10} />}
          title={'ベストな本を'}
          text={
            '本を買うまで時間をかけて悩んだり、買った後に自分に合っていないことに気づくのをなくす'
          }
        />
        <Feature
          icon={<Icon as={FcDonate} w={10} h={10} />}
          title={'お金ください'}
          text={
            '私にはインフラの料金を払えるほどお金を持っていません。なのでお金をください'
          }
        />
        <Feature
          icon={<Icon as={FcRating} w={10} h={10} />}
          title={'技術書のレビュー'}
          text={
            'レビューのデータをもとによりミスマッチを防ぐ'
          }
        />
      </SimpleGrid>
    </Box>
  );
}