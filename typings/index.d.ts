export interface template {
  /**
   * Format error
   * @param e Error instance
   */
  error (e: Error): string
}

export type argv = (name: string) => boolean
export type getArgv = (name: string) => string
/**
 * Sleep timer
 * @param timeout Timeout in ms
 */
export type sleep = (timeout: number) => Promise<undefined>

export interface buffer {
  /**
   * Encode string unsing Buffer
   * @param text Text to encode
   * @param encoding Encoding method (default 'hex')
   */
  encode (text: string, encoding: string): string

  /**
   * Decode string unsing Buffer
   * @param text Text to decode
   * @param encoding Encoding method (default 'hex')
   */
  decode (text: string, encoding: string): string
}
