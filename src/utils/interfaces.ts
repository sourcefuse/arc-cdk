/** @internal */
export interface IBase {
  /**
   * The namespace of the resource.
   */
  namespace: string;

  /**
   * The environment of the resource.
   */
  environment: string;

  /**
   * The name of the resource.
   */
  name: string;

  /**
   * The tags of the resource.
   */
  readonly tags?: {
    [key: string]: string;
  };
}
