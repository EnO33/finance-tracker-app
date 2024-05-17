import { useOpenAccount } from "@/features/accounts/hooks/use-open-account";

import { cn } from "@/lib/utils";

type Props = {
  account: string | null;
  accountId: string;
};

export const AccountColumn = ({ account, accountId }: Props) => {
  const { onOpen: onOpenAccount } = useOpenAccount();

  const onClick = () => {
    onOpenAccount(accountId);
  };
  return (
    <div
      className="flex items-center cursor-pointer hover:underline"
      onClick={onClick}
    >
      {account}
    </div>
  );
};
