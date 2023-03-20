const axios = require("axios");
const token = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGkiOjEsImdycCI6MSwiaWF0IjoxNjc5MjM5Mzk1LCJleHAiOjE3MTA3OTY5OTUsImF1ZCI6InVybjp3aWtpLmpzIiwiaXNzIjoidXJuOndpa2kuanMifQ.autCDE2P5BE4GDaaMHNkgGmjOYdYSV0k_3zL3ZKvUIycs2qM4ZlidZz_zFW9D-dCzL6J76gferFOpyTOQew3oTO-ER9K8_WI2fZcyt2l2_rq-X2uvk_IxtyeBcmTDyFcvgFdrL2YkUnZslro2V7016t2e3kN-G9NUkuRU3sepf5bxwC5revv12gWv-D23as4mmNvosQMiiCI0C9NLWclnssuArVseUk4V8jnrtcTWmUdPh7UrBhDvYBnQuvt7UWomXCjB3qQlaTJFP-O7hB80tLczMk4ZkK_Uo6Du1D7BaOYKNoORniR0PVQDyMf75c02lSNOB5xlrWPbEnZxfFbTw"

const subirUsuariosGraphQL = async (usuarios) => {
    const url = 'http://localhost/graphql';
    usuarios.forEach(async element => {
        console.log(element.group)
        const mutation = `
    mutation {
        users {
          create (
            email: "${element.email}"
            name: "${element.destino + " " + element.name}"
            passwordRaw: "${element.password}"
            providerKey: "local"
            groups: [${element.group}]
            mustChangePassword: true
            sendWelcomeEmail: false
          ) {
            responseResult {
            succeeded
            slug
            message
        }
            user {
            id
        }
    }
}
      }`;
        const config = {
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json'
            },
            method: 'POST',
            data: {
                query: mutation
            }
        };
        try {
            const { data } = await axios(url, config);

            console.log(data)

        } catch (error) {

            console.error(`Error al subir usuario`, error.message);
        }
    });
}



module.exports = { subirUsuariosGraphQL }