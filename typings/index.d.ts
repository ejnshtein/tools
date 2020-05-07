export interface Lib {
  argv (name: string): boolean
  getArgv (name: string): string
  buffer: Buffer
  /**
   * Sleep timer
   * @param timeout Timeout in ms
   */
  sleep (timeout: number): Promise<undefined>
  template: {
    /**
     * Format error
     * @param e Error instance
     */
    error (e: Error): string
  }
}

interface Buffer {
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

export default Lib
