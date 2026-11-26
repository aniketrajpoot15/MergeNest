import { User } from './user.model.js';

/**
 * Strip sensitive internal fields and return a clean public user representation.
 * @param {import('mongoose').Document | object} userDoc
 * @returns {object}
 */
export const toSafeUser = (userDoc) => ({
  id: userDoc._id.toString(),
  name: userDoc.name,
  email: userDoc.email,
  avatar: userDoc.avatar,
  bio: userDoc.bio,
  skills: userDoc.skills,
  githubUsername: userDoc.githubUsername || null,
  createdAt: userDoc.createdAt,
  updatedAt: userDoc.updatedAt,
});

/**
 * Find a user by email address (case-insensitive via schema lowercase).
 * @param {string} email
 * @param {{ includePassword?: boolean }} [options]
 * @returns {Promise<import('mongoose').Document | null>}
 */
export const findUserByEmail = async (
  email,
  { includePassword = false } = {}
) => {
  const normalizedEmail = email.trim().toLowerCase();
  const query = User.findOne({ email: normalizedEmail });

  if (includePassword) {
    query.select('+password');
  }

  return query.exec();
};

/**
 * Create a new User document in MongoDB.
 * @param {{ name: string, email: string, password?: string }} userData
 * @returns {Promise<import('mongoose').Document>}
 */
export const createUser = async (userData) => {
  const user = await User.create(userData);
  return user;
};
