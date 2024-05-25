import React, { useState, useEffect } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import {validateMail} from '../../shared/utils/validators';
import { Typography } from "@mui/material";
import InputWithLabel from '../../shared/components/InputWithLabel';
import CustomPrimaryButton from "../../shared/components/CustomPrimaryButton";
import { connect } from "react-redux";
import { getActions } from "../../store/actions/friendsActions";


const additionalStyles = {
  marginLeft: "15px",
 marginRight: "15px",
 marginBottom: '10px'
};

const AddFriendDialog = ({
  isDialogOpen,
  closeDialogHandler,
  sendFriendInvitation = () =>{}
}) => {
  const [mail, setMail] = useState('');
  const [isFormValid, setIsFormValid] = useState('');

  const handleSendInvitation = ()=>{
    // send friend request to server
    sendFriendInvitation({ targetMailAddress: mail }, handleCloseDialog);
    console.log('sendInvitation')
  }

  const handleCloseDialog = ()=>{
    closeDialogHandler();
    setMail('');
  }

  useEffect(() => {
    setIsFormValid(validateMail(mail))
  }, [mail, setIsFormValid]);

  return (
    <div>
      <Dialog open={isDialogOpen} onClose={handleCloseDialog}>
        <DialogTitle>
          <Typography>Invite a Friend</Typography>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Typography>
              Enter e-mail address of friend which would you like to invite
            </Typography>
          </DialogContentText>
          <InputWithLabel
            value={mail}
            setValue={setMail}
            label="Mail"
            type="email"
            placeholder="enter email address"
          />
        </DialogContent>
        <DialogActions>
          <CustomPrimaryButton
            additionalStyles={additionalStyles}
            label="Send invitation"
            onClick={handleSendInvitation}
            disabled={!isFormValid}
          />
        </DialogActions>
      </Dialog>
    </div>
  );
};

const mapActionsToProps = (dispatch) => {
  return {
    ...getActions(dispatch),
  };
};

export default connect(null, mapActionsToProps)(AddFriendDialog);