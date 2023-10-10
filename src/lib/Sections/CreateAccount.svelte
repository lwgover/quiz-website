<script>
	// @ts-nocheck
    import bcrypt from 'bcryptjs';
    let passwordMatch = false;

	var status = 'waiting';
	async function loginUser(credentials) {
        status = 'loading';
		const userData = {
			// @ts-ignore
			username: credentials.username,
			// @ts-ignore
			password: credentials.password
		};

		// Perform user authentication
		return fetch('http://127.0.0.1:5000/CreateUser', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(userData)
		}).then(response => { 
				if(response.ok)
            	{    
                	return response.json();
            	} 
            	else 
            	{  
                	throw response;  
            	}  
        	}).then( respData => { 
        	    console.log(respData); // <-- log JSON response here
                status = respData['status']
        	    return respData;  // return JSON response for access in your promise chain
        	}) ;
	}

	function submitForm() {
		// @ts-ignore
		var username = document.getElementById('username');
		// @ts-ignore
		var password = document.getElementById('password');
		// @ts-ignore
        var password2 = document.getElementById('password2');

		if (username.value === '') {
			// @ts-ignore
			username.parentElement.style.color = 'red';
			// @ts-ignore
			username.style.borderColor = 'red';
			// @ts-ignore
		} else {
			// @ts-ignore
			username.parentElement.style.color = '#555';
			// @ts-ignore
			username.style.borderColor = '#777';
		}
		// @ts-ignore
		if (password.value === '') {
			// @ts-ignore
			password.parentElement.style.color = 'red';
			// @ts-ignore
			password.style.borderColor = 'red';
		} else {
			// @ts-ignore
			password.parentElement.style.color = '#555';
			// @ts-ignore
			password.style.borderColor = '#777';
		}
        if (password.value != password2.value) {
            passwordMatch = false;
			// @ts-ignore
			password.parentElement.style.color = 'red';
			// @ts-ignore
			password.style.borderColor = 'red';
            // @ts-ignore
			password2.parentElement.style.color = 'red';
			// @ts-ignore
			password2.style.borderColor = 'red';
            
		} else {
            passwordMatch = true;
			// @ts-ignore
			password.parentElement.style.color = '#555';
			// @ts-ignore
			password.style.borderColor = '#777';
            // @ts-ignore
			password2.parentElement.style.color = '#555';
			// @ts-ignore
			password2.style.borderColor = '#777';
		}
		// @ts-ignore
		if (!(username.value === '') && !(password.value === '') && (password.value === password2.value)) {
			const data = {
				// @ts-ignore
				username: username.value,
				// @ts-ignore
				password: password.value
			};
			console.log(JSON.stringify(data));
			loginUser(data);
		}
	}
</script>

<section class="login">
	<div class="login-container">
		<div class="login-title">Create Account</div>
		{#if status.localeCompare('loading') == 0}
			<div class="center-ellipsis">
				<div class="lds-ellipsis">
					<div />
					<div />
					<div />
					<div />
				</div>
			</div>
        {:else if status.localeCompare('success') == 0}
            <div class='login-success-text'>
                You successfully logged in!
            </div>
            <a href='./profile' ><div class="profile-button">Go to your Profile →</div></a>
		{:else}
        {#if status.localeCompare('failed') == 0}
        <div class="text-input-container" style="color: red; text-align:center; transform: translate(0, -3vh);">
            Invalid Username or Password, please try again</div>
            {/if}
            {#if !passwordMatch}
            <div class="text-input-container" id='noMatch' style="color: red; text-align:center; transform: translate(0, -3vh);">
                Passwords don't match</div>
            {/if}
			<form>
				<label class="text-input-container">
					Username
					<input class="text-input" type="text" id="username" placeholder="User" />
				</label>
				<label class="text-input-container">
					Password
					<input class="text-input" type="text" id="password" placeholder="Password" />
				</label>
                <label class="text-input-container">
					Confirm Password
					<input class="text-input" type="text" id="password2" placeholder="Password" />
				</label>

				<input class="submit-button" type="submit" value="login →" on:click={() => submitForm()} />
			</form>
		{/if}
	</div>
</section>

<style>
    #noMatch {
        display:none; 
    }
    .profile-button {
        padding: 20px;
        margin:auto;
        width:fit-content;
        color:rgb(84, 84, 84);;
        font-family: var(--font-sans);
        font-weight: 1000;
        border: rgb(84, 84, 84) solid 4px;
        margin-top: 0vh; 
    }
    .login-success-text {
        text-align: center;
        font-family: Mackinac, ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif;
		font-feature-settings: 'cv02', 'cv03', 'cv04', 'cv11';
		font-size: 4vh;
		font-variation-settings: normal;
		font-weight: 900;
		height: auto;
		letter-spacing: -0.9px;
		line-height: 45px;
		outline-color: rgb(124, 58, 237);
		word-spacing: 0.9px;
		-webkit-font-smoothing: antialiased;
		-webkit-text-fill-color: rgb(84, 84, 84);
        padding-bottom: 0px;
        margin: 0px;
        margin-top: 5vh;
        padding:5vw;
    }
	.text-input-container {
		margin-left: 15%;
		margin-right: 15%;
		font-family: var(--font-sans);
		font-size: 1.8vh;
		color: #555;
	}
	.submit-button {
		margin-left: 17.5%;
		margin-right: 17.5%;
		margin-top: 2vh;
		text-align: center;
		float: center;
		width: 65%;
		height: 6vh;
		background-image: linear-gradient(to left, #cf5599, #9e79d0, #4c97e3, #00abd3, #43b6b3);
		color: white;
		border: none;
		border-radius: 3vh;
		font-size: 4vh;
		font-family: var(--font-serif);
		font-weight: 550;
		letter-spacing: 6px;
	}
	.submit-button:hover {
		background-image: linear-gradient(to left, #e888bd, #c1a4ed, #8bbfff, #6cd3f6, #83e0dd);
	}
	.text-input {
		outline: none;
		margin: auto;
		margin-top: 0.3vh;
		margin-bottom: 3vh;
		border-top: 0px;
		border-left: 0px;
		border-right: 0px;
		width: 70%;
		margin-right: 15%;
		margin-left: 15%;
		height: 5vh;
		border-radius: 5px;
		overflow: hidden;
		font-size: 2.5vh;
		padding: 1vh;
	}
	.text-input:hover {
		background-color: #eee;
	}
	.login-container {
		background-color: white;
		width: 600px;
		height: 62vh;
		margin: auto;
		margin-top: 4vh;
		margin-bottom: 4vh;
		overflow: hidden;
		box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.1);
		border-radius: 15px;
	}
	.login-title {
		display: relative;
		font-size: 7vh;
		color: #333;
		font-style: italic;
		letter-spacing: 3px;
		margin: 3.5vh;
		margin-bottom: 5vh;
		text-align: center;
		font-weight: 500;
	}
	@media screen and (max-width: 650px) {
		.login-container {
			width: 90vw;
		}
        .submit-button {
            margin-top: 0px;
        }
	}

	/** From https://loading.io/css/*/
	.lds-ellipsis {
		position: relative;
		width: 160px;
		height: 160px;
		margin: auto;
		margin-top: 20vh;
	}
	.lds-ellipsis div {
		position: absolute;
		width: 20px;
		height: 20px;
		border-radius: 50%;
		background: #818181;
		animation-timing-function: cubic-bezier(0, 1, 1, 0);
	}
	.lds-ellipsis div:nth-child(1) {
		left: 10px;
		animation: lds-ellipsis1 0.6s infinite;
	}
	.lds-ellipsis div:nth-child(2) {
		left: 10px;
		animation: lds-ellipsis2 0.6s infinite;
	}
	.lds-ellipsis div:nth-child(3) {
		left: 70px;
		animation: lds-ellipsis2 0.6s infinite;
	}
	.lds-ellipsis div:nth-child(4) {
		left: 130px;
		animation: lds-ellipsis3 0.6s infinite;
	}
	@keyframes lds-ellipsis1 {
		0% {
			transform: scale(0);
		}
		100% {
			transform: scale(1);
		}
	}
	@keyframes lds-ellipsis2 {
		0% {
			transform: translate(0, 0);
		}
		100% {
			transform: translate(60px, 0);
		}
	}
	@keyframes lds-ellipsis3 {
		0% {
			transform: scale(1);
		}
		100% {
			transform: scale(0);
		}
	}
</style>
