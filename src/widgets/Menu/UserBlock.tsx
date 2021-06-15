import React from "react";
import styled from "styled-components";
import Button from "../../components/Button/Button";
import { ButtonMenu, ButtonMenuItem } from "../../components/ButtonMenu";
import { useWalletModal } from "../WalletModal";
import { Login } from "../WalletModal/types";

interface Props {
  account?: string;
  login: Login;
  logout: () => void;
  active: number;
}

const StyledButton = styled(Button)`
  color: rgb(109, 168, 255);
  margin-right: 10px;
  height: 40px;
`;

const StyledVersionButton = styled(ButtonMenu)`
  height: 40px;
`;

const AccountArea = styled.div`
  height: 66px;
  margin-top: 10px;
`;

const UserBlock: React.FC<Props> = ({ account, login, logout, active }) => {
  const { onPresentConnectModal, onPresentAccountModal } = useWalletModal(login, logout, account);
  const accountEllipsis = account ? `${account.substring(0, 6)}...${account.substring(account.length - 4)}` : null;
  return (
    <AccountArea>
      {account ? (
        <StyledButton
          size="md"
          variant="tertiary"
          onClick={() => {
            onPresentAccountModal();
          }}
        >
          {accountEllipsis}
        </StyledButton>
      ) : (
        <StyledButton
          size="md"
          variant="tertiary"
          onClick={() => {
            onPresentConnectModal();
          }}
        >
          Connect Wallet
        </StyledButton>
      )}
    </AccountArea>
  );
};

export default UserBlock;
