export const validationData = (email, password) => {

    
    const isEmailValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
    
    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/.test(password);
    
    if (!isEmailValid)
    
    return "Invalid email";
    
    if (!isPasswordValid)
    
    return "Password is invalid";
    
    return null;
}
