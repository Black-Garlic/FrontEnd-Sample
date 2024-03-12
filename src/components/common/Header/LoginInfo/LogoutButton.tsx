import { useAppDispatch } from "@store/config";
import { resetUser } from "@services/common/commonSlice";
import { useState } from "react";
import { Modal } from "antd";

const LogoutButton = () => {
  const dispatch = useAppDispatch();

  const [modalOpen, setModalOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const handleOk = () => {
    setConfirmLoading(true);

    setTimeout(() => {
      dispatch(resetUser());
      setModalOpen(false);
      setConfirmLoading(false);
    }, 1000);
  };

  const handleCancel = () => {
    setModalOpen(false);
  };

  return (
    <>
      <button
        className="flex-1 w-full px-4 py-2 rounded-lg text-main text-base text-center"
        onClick={() => setModalOpen(true)}
      >
        로그아웃
      </button>

      <Modal
        title="로그아웃"
        open={modalOpen}
        confirmLoading={confirmLoading}
        onOk={handleOk}
        okText={"로그아웃"}
        okButtonProps={{
          className: "bg-main",
        }}
        onCancel={handleCancel}
        cancelText={"취소"}
      >
        <p>로그아웃을 하시겠습니까?</p>
      </Modal>
    </>
  );
};

export default LogoutButton;
