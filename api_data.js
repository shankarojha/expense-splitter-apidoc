define({ "api": [
  {
    "group": "Expense",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/getexpense/:ExpenseId",
    "title": "to get details of the expense.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "ExpenseId",
            "description": "<p>ExpenseId of the expense to be removed. (query params) (required).</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"Expense details found\",\n    \"status\": 200,\n    \"data\": {\n        ExpenseId: \"Jhghy34\",\n        ExpenseName: \"Expense 1\",\n        createdBy: \"sam@gmail.com\",\n        paidBy: \"luffy@gmail.com\",\n        member: [\"luffy@gmail.com\",\"sam@gmail.com\", \"david@yahoo.com\"],\n        debters: [\"david@yahoo.com\",\"sam@gmail.com\"]\n        amount: 5000,\n        createdOn: time.now(),\n        modifiedOn: time.now()\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/router.js",
    "groupTitle": "Expense",
    "name": "GetApiV1GetexpenseExpenseid"
  },
  {
    "group": "Expense",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/getexpenseofuser/email",
    "title": "to get all the expenses of the user.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user. (query params) (required).</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"Expense edited successfully\",\n    \"status\": 200,\n    \"data\": [\n        {\n        ExpenseId: \"Jhghy34\",\n        ExpenseName: \"Expense 1\",\n        createdBy: \"sam@gmail.com\",\n        paidBy: \"luffy@gmail.com\",\n        member: [\"luffy@gmail.com\",\"sam@gmail.com\", \"david@yahoo.com\"],\n        debters: [\"david@yahoo.com\",\"sam@gmail.com\"]\n        amount: 5000,\n        createdOn: time.now(),\n        modifiedOn: time.now()\n    },\n    {\n         ExpenseId: \"fgdF8g8\",\n        ExpenseName: \"Expense 2\",\n        createdBy: ram@gmail.com,\n        paidBy: dwayne@gmail.com,\n        member: [\"dwayne@gmail.com\", \"luffy@gmail.com\", \"sam@gmail.com\"],\n        amount: 2000,\n        createdOn: time.now(),\n        modifiedOn: time.now()   \n    }\n    ]\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/router.js",
    "groupTitle": "Expense",
    "name": "GetApiV1GetexpenseofuserEmail"
  },
  {
    "group": "Expense",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/createexpense",
    "title": "to create an expense.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "ExpenseName",
            "description": "<p>Expense name of the user. (bodyparams) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "paidBy",
            "description": "<p>Email of the payer. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "amount",
            "description": "<p>Amount of the expense. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "debters",
            "description": "<p>Debters in the expense. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"New expense created successfully\",\n    \"status\": 200,\n    \"data\": {\n        ExpenseId: \"Jhghy34\",\n        ExpenseName: \"Expense 1\",\n        createdBy: \"sam@gmail.com\",\n        paidBy: \"luffy@gmail.com\",\n        member: [\"luffy@gmail.com\",\"sam@gmail.com\", \"david@yahoo.com\"],\n        debters: [\"david@yahoo.com\",\"sam@gmail.com\"]\n        amount: 5000,\n        createdOn: time.now(),\n        modifiedOn: time.now()\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/router.js",
    "groupTitle": "Expense",
    "name": "PostApiV1Createexpense"
  },
  {
    "group": "Expense",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/deleteexpense/ExpenseId",
    "title": "to delete a expense.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "ExpenseId",
            "description": "<p>ExpenseId of the expense to be removed. (body params) (required).</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"Expense edited successfully\",\n    \"status\": 200,\n    \"data\": {\n        ExpenseId: \"Jhghy34\",\n        ExpenseName: \"Expense 1\",\n        createdBy: \"sam@gmail.com\",\n        paidBy: \"luffy@gmail.com\",\n        member: [\"luffy@gmail.com\",\"sam@gmail.com\", \"david@yahoo.com\"],\n        debters: [\"david@yahoo.com\",\"sam@gmail.com\"]\n        amount: 5000,\n        createdOn: time.now(),\n        modifiedOn: time.now()\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/router.js",
    "groupTitle": "Expense",
    "name": "PostApiV1DeleteexpenseExpenseid"
  },
  {
    "group": "Expense",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/editexpense",
    "title": "to edit expense.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "ExpenseId",
            "description": "<p>Expense Id of the expense. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "amount",
            "description": "<p>Amount of the expense. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "debters",
            "description": "<p>Debters in the expense. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "removeMembers",
            "description": "<p>Members to remove from the expense. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"Expense edited successfully\",\n    \"status\": 200,\n    \"data\": {\n        ExpenseId: \"Jhghy34\",\n        ExpenseName: \"Expense 1\",\n        createdBy: \"sam@gmail.com\",\n        paidBy: \"luffy@gmail.com\",\n        member: [\"luffy@gmail.com\",\"sam@gmail.com\", \"david@yahoo.com\"],\n        debters: [\"david@yahoo.com\",\"sam@gmail.com\"]\n        amount: 5000,\n        createdOn: time.now(),\n        modifiedOn: time.now()\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/router.js",
    "groupTitle": "Expense",
    "name": "PostApiV1Editexpense"
  },
  {
    "group": "Expense",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/updatepaymentInfo",
    "title": "to update details of the expense payments.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "ExpenseId",
            "description": "<p>ExpenseId of the expense to be removed. (body params) (required).</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user to be updated. (body params) (required).</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userEmail",
            "description": "<p>userEmail of the email of user. (body params) (required).</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "paid",
            "description": "<p>paid of the expense to be updated. (body params) (required).</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"Expense details found\",\n    \"status\": 200,\n    \"data\": {\n        ExpenseId: \"Jhghy34\",\n        ExpenseName: \"Expense 1\",\n        createdBy: \"sam@gmail.com\",\n        paidBy: \"luffy@gmail.com\",\n        member: [\"luffy@gmail.com\",\"sam@gmail.com\", \"david@yahoo.com\"],\n        debters: [\"david@yahoo.com\",\"sam@gmail.com\"]\n        amount: 5000,\n        createdOn: time.now(),\n        modifiedOn: time.now()\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/router.js",
    "groupTitle": "Expense",
    "name": "PostApiV1Updatepaymentinfo"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/forgotpassword",
    "title": "api for sending link in an email for resetting password.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"reset link has been sent to your email id successfully\",\n    \"status\": 200,\n    \"data\": {\n        mailsent to: 250 2.0.0 OK  1629880195 c133sm21409268pfb.39 - gsmtp\n        }\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/router.js",
    "groupTitle": "users",
    "name": "PostApiV1Forgotpassword"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/login",
    "title": "api for user login.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>password of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"Login Successful\",\n    \"status\": 200,\n    \"data\": {\n        \"authToken\": \"ulkhbasjkadI1NiIsInR5cCI6IkpXVCJ9.ghjik3RpZCI6IlVPS2duMnVtNyIsImlhdCI6MTU2Mzk5MzYyNTg1MSwiZXhwIjoxNTY0MDgwMDI1ODUxLCJzdWIiOiJhdXRoVG9rZW4iLCJpc3MiOiJlZC1wMS1Jc3N1ZVRyYWNrZXJUb29sIiwiZGF0YSI6eyJ1c2VySWQiOiJzTmF6T3VWTGkiLCJmaXJzdE5hbWUiOiJyaWNrZXkiLCJsYXN0TmFtZSI6InBvaW50aW5nIiwidXNlck5hbWUiOoPugWNrZXlAZ21haWwuY29tIiwiZW1haWwiOiJyaWNrKLOAZ21haWwuY29tIiwibW9iaWxlTnVtYmVyIjo5ODAwOTc4OTU2LCJzb2NpYWxMb2dpbkZsYWciOmZhbHNlLCJsb2NhbExvZ2ohyrtnZyI6dHJ1ZX19.wnokKu5unc-8l2JyLloJfggi5axij-kjhee85HVlJr0\",\n        \"userDetails\": {\n            \"userId\": \"dKaoliVLi\",\n            \"firstName\": \"ram\",\n            \"lastName\": \"hilton\",\n            \"userName\": \"ram@gmail.com\",\n            \"email\": \"ram@gmail.com\",\n            \"mobileNumber\": 7992202173\n        }\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/router.js",
    "groupTitle": "users",
    "name": "PostApiV1Login"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/logout",
    "title": "to logout user.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of the user. (auth headers) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"Logged Out Successfully\",\n    \"status\": 200,\n    \"data\": null\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/router.js",
    "groupTitle": "users",
    "name": "PostApiV1Logout"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/resetpassword",
    "title": "for user password reset.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>authToken of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>password of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"User details Password reset\",\n    \"status\": 200,\n    \"data\": {\n        {\"n\":1,\"nModified\":1,\"ok\":1}\n        }\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/router.js",
    "groupTitle": "users",
    "name": "PostApiV1Resetpassword"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/signup",
    "title": "api for user signup.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "firstName",
            "description": "<p>firstName of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "lastName",
            "description": "<p>lastName of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "mobile",
            "description": "<p>mobile Number of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>password of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"User created or updated\",\n    \"status\": 200,\n    \"data\": {\n        \"userId\": \"dKaoliVLi\",\n        \"firstName\": \"ram\",\n        \"lastName\": \"hilton\",\n        \"userName\": \"ram@gmail.com\",\n        \"email\": \"ram@gmail.com\",\n        \"mobileNumber\": 7992202172,\n        \"socialLoginFlag\": false,\n        \"localLoginFlag\": true,\n        \"_id\": \"6d85a519bf182d249c3eb598\",\n        \"__v\": 0\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/router.js",
    "groupTitle": "users",
    "name": "PostApiV1Signup"
  }
] });
