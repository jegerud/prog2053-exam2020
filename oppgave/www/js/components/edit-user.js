import { LitElement, html, css } from "../../node_modules/lit-element/lit-element.js";

class EditUser extends LitElement {
  static get properties() {
    return {
      user: { type: Object }
    };
  }

  updateUser(e) {
    var current = this;
    let newData = {
      "uid": current.user.uid,
      "uname": current.user.uname,
      "firstName": current.user.firstName,
      "lastName": current.user.firstName,
      "oldPwd": current.user.oldPassword,
      "pwd": current.user.newPassword
    }
    fetch('api/updateUser.php', {
     method: 'POST',
     body: JSON.stringify(newData),
    }).then(res=>res.json())
      .then(data=>{
        if (data.status=='success') {
            console.log("User updated!");
            location.reload();
        } else {
            console.log("User not updated!");
        }
      })
  }

  static styles = css`
    .container {
      display: grid;
      grid-gap: 10px;
      grid-template-columns: auto;
      grid-template-rows: 70px 70px 70px 70px auto;
      grid-template-areas: 
          "email"
          "firstname"
          "lastname"
          "oldpassword"
          "newpassword"
      padding: 40px;
    }

    .email {
      grid-area: email;
      width: 20rem;
    }
    
    .firstname {
      grid-area: firstname;
      width: 20rem;
    }
    
    .lastname {
      grid-area: lastname;
      width: 20rem;
    }
    
    .oldpassword{
      grid-area: oldpassword;
      width: 20rem;
    }
    
    .newpassword {
      grid-area: newpassword;
      width: 20rem;
    }
    `;

  render() {
    return html`
    <div class="container">
      <div class="email">
        <label for="email">Email</label>
        <input id="uname" name="uname" type="text" value="${this.user.uname=e.target.value}">
        <input id="uid" name="uid" type="hidden" value="${this.user.uid=e.target.value}">
      </div>
      <div class="firstname">
        <label for="firstName">First Name</label>
        <input class="form-control" id="firstName" name="firstName" type="text" value="${this.user.firstName=e.target.value}">
      </div>
      <div class="lastname">
        <label for="lastName">Last Name</label>
        <input class="form-control" id="lastName" name="lastName" type="text" value="${this.user.lastName=e.target.value}">
      </div>
      <div class="oldpassword">
        <label for="oldpwd">Old Password</label>
        <input @input="${(e)=>this.oldPassword=e.target.value} type="password" id="oldpwd" name="oldpwd" type="text" value="">
      </div>
      <div class="newpassword">
        <label for="newpwd">New Password</label>
        <input @input="${(e)=>this.newPassword=e.target.value} type="password" id="newpwd" name="newpwd" type="text" value="">
      </div>
    <input type="submit" @click=${(e)=>this.updateUser} id="submitForm" name="editUser" value="Edit User"></input>
    </div>
    `;
  }

}
customElements.define('edit-user', EditUser);
