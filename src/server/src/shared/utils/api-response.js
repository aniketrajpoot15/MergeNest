/**
 * Standardized API success response wrapper matching MergeNest API conventions.
 */
export class ApiResponse {
  /**
   * @param {number} statusCode - HTTP status code (< 400)
   * @param {unknown} [data=null] - Response payload
   * @param {string} [message='Success'] - Human-readable summary
   * @param {object|null} [pagination=null] - Optional pagination metadata
   */
  constructor(statusCode, data = null, message = 'Success', pagination = null) {
    this.statusCode = statusCode;
    this.success = statusCode < 400;
    this.message = message;
    this.data = data;
    this.pagination = pagination;
  }

  /**
   * Serialize and send the standardized JSON response on an Express response object.
   * @param {import('express').Response} res
   * @returns {import('express').Response}
   */
  send(res) {
    const payload = {
      success: this.success,
      message: this.message,
      data: this.data,
    };

    if (this.pagination) {
      payload.pagination = this.pagination;
    }

    return res.status(this.statusCode).json(payload);
  }
}
