import React from "react";
import PrimaryButton from "components/button/primaryButton";
import SecondaryButton from "components/button/secondaryButton";
import { useTranslation } from "react-i18next";
import cls from "./addressPopover.module.scss";

type Props = {
  handleOpenAddressModal: () => void;
  handleCloseAddressPopover: () => void;
  defaultAddress?: string;
};

export default function AddressPopover({
  handleOpenAddressModal,
  handleCloseAddressPopover,
  defaultAddress,
}: Props) {
  const { t } = useTranslation();

  const rejectAddress = () => {
    handleCloseAddressPopover();
    handleOpenAddressModal();
  };

  const acceptAddress = () => {
    handleCloseAddressPopover();
  };

  return (
    <div className={cls.wrapper}>
      <label className={cls.label}>{'Order for Address'}</label>
      <p className={cls.text}>{defaultAddress}</p>
      <div className={cls.actions}>
        <SecondaryButton size="small" onClick={rejectAddress}>
          {'No'}
        </SecondaryButton>
        <PrimaryButton size="small" onClick={acceptAddress}>
          {'Yes'}
        </PrimaryButton>
      </div>
    </div>
  );
}
