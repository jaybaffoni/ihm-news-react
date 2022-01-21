import { useState } from 'react';
import { config } from '../config';
import {AppButton} from './app-button';
import CompanyLogo from './company-logo';

const SignIn = () => {

    const [signInShowing, setSignInShowing] = useState(true);

    const switchSignIn = () => {
        setSignInShowing(!signInShowing);
    }

    const styles = {
        container: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
            backgroundColor: config.colors.primary,
            paddingTop: 32
        },
        innerContainer: {
            backgroundColor: config.colors.primary,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: 36,
            borderRadius: 4
        },
        input: {
            border: "1px solid black",
            padding: 6,
            marginBottom: 16
        },
        logo: {
            marginBottom: 16,
            borderRadius: 4,
            overflow: 'hidden'
        },
        signInButton: {
            marginBottom: 16
        },
        text: {
            color: config.colors.light,
            width: '100%',
            textAlign: 'center'
        },
        link: {
            color: config.colors.secondary,
            fontWeight: 'bold',
            cursor: 'pointer'
        }
    }

  return (
      <div style={styles.container}>
          <div style={styles.innerContainer}>
            <CompanyLogo size={'medium'} style={styles.logo}/>

            {signInShowing ? 
            <>
                <input placeholder={'E-mail'} style={styles.input} />
                <input placeholder={'Password'} style={styles.input} />
                <AppButton variant={'secondary'} title={'Sign In'} style={styles.signInButton}/>
                <p style={styles.text}>Don't have an account? <a onClick={switchSignIn} style={styles.link}>Sign Up</a></p>
            </> 
            : 
            <>
                <input placeholder={'Display Name'} style={styles.input} />
                <input placeholder={'E-mail'} style={styles.input} />
                <input placeholder={'Password'} style={styles.input} />
                <input placeholder={'Confirm Password'} style={styles.input} />
                <input placeholder={'Phone Number'} style={styles.input} />
                <AppButton variant={'secondary'} title={'Sign Up'} style={styles.signInButton}/>
                <p style={styles.text}>Already have an account? <a onClick={switchSignIn} style={styles.link}>Sign In</a></p>
            </>}            

          </div>
      </div>
  )
};

export default SignIn;
