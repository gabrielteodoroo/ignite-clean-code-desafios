async function registerUserInDatabase(data) {
  const { email, name, avatar } = data

  if (!avatar) return { error: 'avatar is required' }

  if(!name) return { error: 'name is required' }

  const emailAlreadyExists = getUserByEmail(email)

  if (emailAlreadyExists) {
    return { error: 'email already used' }
  }

  // Essa função realiza a conversão das imagens para JPG a fim de evitar erros de incompatibilidade.
  // Mais informações na issue https://github.com/rocketseat-education/example-repository/issues/1
  const convertedAvatar = convertImageToJPG(avatar)

  const createUser = await createUser({ email, name, avatar: convertedAvatar })

  return { createUser }
}