const register = async (_, input) =>
{
    const {firstName, lastName, email, password} = input;
    if(firstName || lastName || email || password)
    {
        return "Field's required!";
    }

    try
    {
        const user = new User
        ({
            id:nanoid(),
            firstName,
            lastName,
            email,
            password,
        });

        await user.save();
        return "User registered!";
    }
    catch(error)
    {
        return "Error occurred!!"
    }

};

module.exports = {register, }