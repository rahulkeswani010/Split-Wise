import React from "react";
import styled from "styled-components";
import { Box, Flex } from "../../Components/Layouts";
import { BoldText, Label, Spacer } from "../../Components/Typography";
import colors from "../../theme/colors";

const BalanceBox = styled(Box)`
  padding: 1rem;
  background: ${({ theme }) => theme.background};
  border-radius: 4px;
  label {
    color: ${colors.darkGray};
  }
`;

const BalanceSummary = ({ totalBalance, youOwe, youOwed }) => {
  const owedAmount = youOwed?.reduce((prev,curr) => prev.amount+curr.ammount,0);
  const oweAmount = youOwe?.reduce((prev,curr) => prev.amount+curr.ammount,0);
  return (
    <BalanceBox>
      <Flex>
        <Box>
          <Label>Total Balance</Label>
          <BoldText style={{ color: colors.primary }}>5000</BoldText>
        </Box>
        <Spacer />
        <Box>
          <Label>You owe</Label>
          <BoldText style={{ color: colors.red }}>{Number.isNaN(oweAmount)?0:oweAmount}</BoldText>
        </Box>
        <Spacer />
        <Box>
          <Label>You are owed</Label>
          <BoldText style={{ color: colors.primary }}>{Number.isNaN(owedAmount)?0:owedAmount}</BoldText>
        </Box>
      </Flex>
    </BalanceBox>
  );
};

export default BalanceSummary;
