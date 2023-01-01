import React from "react";
import { Modal, useMantineTheme } from "@mantine/core";

function ProfileModal({ modalOpened, setmodalOpened }) {
  const theme = useMantineTheme();
  return (
    <Modal
      overlayColor={
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : theme.colors.gray[5]
      }
      overlayOpacity={0.55}
      overlayBlur={3}
      opened={modalOpened}
      onClose={() => setmodalOpened(false)}
      size='55%'
    >
      <form className="infoForm">
        <h3>Your info</h3>
        <div>
          <input
            className="infoInput"
            type="text"
            name="firstname"
            placeholder="First Name"
          />
          <input
            className="infoInput"
            type="text"
            name="lastname"
            placeholder="Last Name"
          />
        </div>
        <div>
        <input
            className="infoInput"
            type="text"
            name="worksAt"
            placeholder="Works at"
          />
        </div>
        <div>
        <input
            className="infoInput"
            type="text"
            name="livesIn"
            placeholder="Lives In"
          />
          <input
            className="infoInput"
            type="text"
            name="country"
            placeholder="Country"
          />
        </div>
        <div>
        <input
            className="infoInput"
            type="text"
            name="relationship"
            placeholder="Relationship Status"
          />
        </div>
        <div>
            Profile Image
            <input type="file" name="profileImg"/>
            Cover Image
            <input type="file" name="coverImg"/>
        </div>
        <button className="button infoButton">Save</button>
      </form>
    </Modal>
  );
}

export default ProfileModal;
