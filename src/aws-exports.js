/* eslint-disable */
// WARNING: DO NOT EDIT. This file is automatically generated by AWS Amplify. It will be overwritten.

const awsmobile = {
    "aws_project_region": "eu-central-1",
    "aws_cognito_identity_pool_id": "eu-central-1:26907c3d-283d-4ed1-a3a5-bba04ec424aa",
    "aws_cognito_region": "eu-central-1",
    "aws_user_pools_id": "eu-central-1_ulRLsocuY",
    "aws_user_pools_web_client_id": "3jtprkka6j3nv2om4tesg0dke6",
    "oauth": {
        "domain": "googlesignin-staging.auth.eu-central-1.amazoncognito.com",
        "scope": [
            "phone",
            "email",
            "openid",
            "profile",
            "aws.cognito.signin.user.admin"
        ],
        "redirectSignIn": "https://main.d33dxtfklsufx1.amplifyapp.com/,http://localhost:3000/",
        "redirectSignOut": "https://main.d33dxtfklsufx1.amplifyapp.com/,http://localhost:3000/",
        "responseType": "code"
    },
    "federationTarget": "COGNITO_USER_POOLS",
    "aws_cognito_username_attributes": [
        "EMAIL"
    ],
    "aws_cognito_social_providers": [],
    "aws_cognito_signup_attributes": [
        "EMAIL"
    ],
    "aws_cognito_mfa_configuration": "OFF",
    "aws_cognito_mfa_types": [
        "SMS"
    ],
    "aws_cognito_password_protection_settings": {
        "passwordPolicyMinLength": 8,
        "passwordPolicyCharacters": []
    },
    "aws_cognito_verification_mechanisms": [
        "EMAIL"
    ]
};


export default awsmobile;
