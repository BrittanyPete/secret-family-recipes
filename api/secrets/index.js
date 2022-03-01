module.exports = {
    JWT_SECRET: process.env.JWT_SECRET || 'ursula gets the trident',
    BCRYPT_ROUNDS: process.env.BCRYPT_ROUNDS || 8,
}