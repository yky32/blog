## API docs - Profiles Endpoint

<details>
  <summary>Create Profile</summary>
  
  ### Url
  - POST `localhost:9191/profiles`

  ### Interface
  ```java
  {
    "profileType": "INDIVIDUAL",  //ProfileType value here
    "name": "string",
    "avatar": {
      "name": "string",
      "url": "string"
    },
    "biography": "string",
    "tags": [
      "string"
    ],
    "gender": "FEMALE",
    "links": { // SocialLink Enum as Key here
      "INSTAGRAM": "string"
    },
    "mobile": "string",
    "email": "string",
    "images": [
      {
        "name": "string",
        "url": "string"
      }
    ],
    "addresses": [
      {
        "address1": "string",
        "address2": "string",
        "address3": "string"
      }
    ],
    "metadata": {
      "size": "string",
      "openingHours": "string",
      "facilities": [
        "string"
      ]
    }
  }

  // reference class.
  public enum SocialLink {
    PERSONAL,
    INSTAGRAM,
    FACEBOOK,
    TWITTER,
    TELEGRAM,
    WHATSAPP
  }

  public enum ProfileType {
    INDIVIDUAL,
    TUTOR,
    SERVICE_PROVIDER
  }
  ```

</details>
