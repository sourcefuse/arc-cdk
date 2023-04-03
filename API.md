# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiGatewayCustomDomainName <a name="ApiGatewayCustomDomainName" id="arc-cdktf.ApiGatewayCustomDomainName"></a>

#### Initializers <a name="Initializers" id="arc-cdktf.ApiGatewayCustomDomainName.Initializer"></a>

```typescript
import { ApiGatewayCustomDomainName } from 'arc-cdktf'

new ApiGatewayCustomDomainName(scope: Construct, id: string, config: IApiGatewayCustomDomainName)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#arc-cdktf.ApiGatewayCustomDomainName.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#arc-cdktf.ApiGatewayCustomDomainName.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdktf.ApiGatewayCustomDomainName.Initializer.parameter.config">config</a></code> | <code><a href="#arc-cdktf.IApiGatewayCustomDomainName">IApiGatewayCustomDomainName</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="arc-cdktf.ApiGatewayCustomDomainName.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="arc-cdktf.ApiGatewayCustomDomainName.Initializer.parameter.id"></a>

- *Type:* string

---

##### `config`<sup>Required</sup> <a name="config" id="arc-cdktf.ApiGatewayCustomDomainName.Initializer.parameter.config"></a>

- *Type:* <a href="#arc-cdktf.IApiGatewayCustomDomainName">IApiGatewayCustomDomainName</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#arc-cdktf.ApiGatewayCustomDomainName.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="arc-cdktf.ApiGatewayCustomDomainName.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#arc-cdktf.ApiGatewayCustomDomainName.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="arc-cdktf.ApiGatewayCustomDomainName.isConstruct"></a>

```typescript
import { ApiGatewayCustomDomainName } from 'arc-cdktf'

ApiGatewayCustomDomainName.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="arc-cdktf.ApiGatewayCustomDomainName.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#arc-cdktf.ApiGatewayCustomDomainName.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="arc-cdktf.ApiGatewayCustomDomainName.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


### CreateAcmCertificate <a name="CreateAcmCertificate" id="arc-cdktf.CreateAcmCertificate"></a>

#### Initializers <a name="Initializers" id="arc-cdktf.CreateAcmCertificate.Initializer"></a>

```typescript
import { CreateAcmCertificate } from 'arc-cdktf'

new CreateAcmCertificate(scope: Construct, id: string, config: IAcmCertificate)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#arc-cdktf.CreateAcmCertificate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#arc-cdktf.CreateAcmCertificate.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdktf.CreateAcmCertificate.Initializer.parameter.config">config</a></code> | <code><a href="#arc-cdktf.IAcmCertificate">IAcmCertificate</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="arc-cdktf.CreateAcmCertificate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="arc-cdktf.CreateAcmCertificate.Initializer.parameter.id"></a>

- *Type:* string

---

##### `config`<sup>Required</sup> <a name="config" id="arc-cdktf.CreateAcmCertificate.Initializer.parameter.config"></a>

- *Type:* <a href="#arc-cdktf.IAcmCertificate">IAcmCertificate</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#arc-cdktf.CreateAcmCertificate.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="arc-cdktf.CreateAcmCertificate.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#arc-cdktf.CreateAcmCertificate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="arc-cdktf.CreateAcmCertificate.isConstruct"></a>

```typescript
import { CreateAcmCertificate } from 'arc-cdktf'

CreateAcmCertificate.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="arc-cdktf.CreateAcmCertificate.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#arc-cdktf.CreateAcmCertificate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#arc-cdktf.CreateAcmCertificate.property.acmArn">acmArn</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="arc-cdktf.CreateAcmCertificate.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `acmArn`<sup>Required</sup> <a name="acmArn" id="arc-cdktf.CreateAcmCertificate.property.acmArn"></a>

```typescript
public readonly acmArn: string;
```

- *Type:* string

---


### CreateLambdaRole <a name="CreateLambdaRole" id="arc-cdktf.CreateLambdaRole"></a>

#### Initializers <a name="Initializers" id="arc-cdktf.CreateLambdaRole.Initializer"></a>

```typescript
import { CreateLambdaRole } from 'arc-cdktf'

new CreateLambdaRole(scope: Construct, id: string, config: ICreateLambdaRole)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#arc-cdktf.CreateLambdaRole.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#arc-cdktf.CreateLambdaRole.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdktf.CreateLambdaRole.Initializer.parameter.config">config</a></code> | <code><a href="#arc-cdktf.ICreateLambdaRole">ICreateLambdaRole</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="arc-cdktf.CreateLambdaRole.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="arc-cdktf.CreateLambdaRole.Initializer.parameter.id"></a>

- *Type:* string

---

##### `config`<sup>Required</sup> <a name="config" id="arc-cdktf.CreateLambdaRole.Initializer.parameter.config"></a>

- *Type:* <a href="#arc-cdktf.ICreateLambdaRole">ICreateLambdaRole</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#arc-cdktf.CreateLambdaRole.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="arc-cdktf.CreateLambdaRole.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#arc-cdktf.CreateLambdaRole.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="arc-cdktf.CreateLambdaRole.isConstruct"></a>

```typescript
import { CreateLambdaRole } from 'arc-cdktf'

CreateLambdaRole.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="arc-cdktf.CreateLambdaRole.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#arc-cdktf.CreateLambdaRole.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#arc-cdktf.CreateLambdaRole.property.arn">arn</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="arc-cdktf.CreateLambdaRole.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `arn`<sup>Required</sup> <a name="arn" id="arc-cdktf.CreateLambdaRole.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---


### Lambda <a name="Lambda" id="arc-cdktf.Lambda"></a>

#### Initializers <a name="Initializers" id="arc-cdktf.Lambda.Initializer"></a>

```typescript
import { Lambda } from 'arc-cdktf'

new Lambda(scope: Construct, id: string, config: ILambda)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#arc-cdktf.Lambda.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#arc-cdktf.Lambda.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdktf.Lambda.Initializer.parameter.config">config</a></code> | <code><a href="#arc-cdktf.ILambda">ILambda</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="arc-cdktf.Lambda.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="arc-cdktf.Lambda.Initializer.parameter.id"></a>

- *Type:* string

---

##### `config`<sup>Required</sup> <a name="config" id="arc-cdktf.Lambda.Initializer.parameter.config"></a>

- *Type:* <a href="#arc-cdktf.ILambda">ILambda</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#arc-cdktf.Lambda.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="arc-cdktf.Lambda.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#arc-cdktf.Lambda.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="arc-cdktf.Lambda.isConstruct"></a>

```typescript
import { Lambda } from 'arc-cdktf'

Lambda.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="arc-cdktf.Lambda.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#arc-cdktf.Lambda.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#arc-cdktf.Lambda.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdktf.Lambda.property.functionName">functionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdktf.Lambda.property.lambdaFunc">lambdaFunc</a></code> | <code>@cdktf/provider-aws.lambdaFunction.LambdaFunction</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="arc-cdktf.Lambda.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `arn`<sup>Required</sup> <a name="arn" id="arc-cdktf.Lambda.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `functionName`<sup>Required</sup> <a name="functionName" id="arc-cdktf.Lambda.property.functionName"></a>

```typescript
public readonly functionName: string;
```

- *Type:* string

---

##### `lambdaFunc`<sup>Required</sup> <a name="lambdaFunc" id="arc-cdktf.Lambda.property.lambdaFunc"></a>

```typescript
public readonly lambdaFunc: LambdaFunction;
```

- *Type:* @cdktf/provider-aws.lambdaFunction.LambdaFunction

---


### LambdaWithApiGateway <a name="LambdaWithApiGateway" id="arc-cdktf.LambdaWithApiGateway"></a>

#### Initializers <a name="Initializers" id="arc-cdktf.LambdaWithApiGateway.Initializer"></a>

```typescript
import { LambdaWithApiGateway } from 'arc-cdktf'

new LambdaWithApiGateway(scope: Construct, id: string, config: ILambdaWithApiGateway)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#arc-cdktf.LambdaWithApiGateway.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#arc-cdktf.LambdaWithApiGateway.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdktf.LambdaWithApiGateway.Initializer.parameter.config">config</a></code> | <code><a href="#arc-cdktf.ILambdaWithApiGateway">ILambdaWithApiGateway</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="arc-cdktf.LambdaWithApiGateway.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="arc-cdktf.LambdaWithApiGateway.Initializer.parameter.id"></a>

- *Type:* string

---

##### `config`<sup>Required</sup> <a name="config" id="arc-cdktf.LambdaWithApiGateway.Initializer.parameter.config"></a>

- *Type:* <a href="#arc-cdktf.ILambdaWithApiGateway">ILambdaWithApiGateway</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#arc-cdktf.LambdaWithApiGateway.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="arc-cdktf.LambdaWithApiGateway.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#arc-cdktf.LambdaWithApiGateway.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="arc-cdktf.LambdaWithApiGateway.isConstruct"></a>

```typescript
import { LambdaWithApiGateway } from 'arc-cdktf'

LambdaWithApiGateway.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="arc-cdktf.LambdaWithApiGateway.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#arc-cdktf.LambdaWithApiGateway.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#arc-cdktf.LambdaWithApiGateway.property.url">url</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="arc-cdktf.LambdaWithApiGateway.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `url`<sup>Required</sup> <a name="url" id="arc-cdktf.LambdaWithApiGateway.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---


### LambdaWithCloudWatchEvent <a name="LambdaWithCloudWatchEvent" id="arc-cdktf.LambdaWithCloudWatchEvent"></a>

#### Initializers <a name="Initializers" id="arc-cdktf.LambdaWithCloudWatchEvent.Initializer"></a>

```typescript
import { LambdaWithCloudWatchEvent } from 'arc-cdktf'

new LambdaWithCloudWatchEvent(scope: Construct, id: string, config: ILambdaWithCloudWatchEvent)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#arc-cdktf.LambdaWithCloudWatchEvent.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#arc-cdktf.LambdaWithCloudWatchEvent.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdktf.LambdaWithCloudWatchEvent.Initializer.parameter.config">config</a></code> | <code><a href="#arc-cdktf.ILambdaWithCloudWatchEvent">ILambdaWithCloudWatchEvent</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="arc-cdktf.LambdaWithCloudWatchEvent.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="arc-cdktf.LambdaWithCloudWatchEvent.Initializer.parameter.id"></a>

- *Type:* string

---

##### `config`<sup>Required</sup> <a name="config" id="arc-cdktf.LambdaWithCloudWatchEvent.Initializer.parameter.config"></a>

- *Type:* <a href="#arc-cdktf.ILambdaWithCloudWatchEvent">ILambdaWithCloudWatchEvent</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#arc-cdktf.LambdaWithCloudWatchEvent.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="arc-cdktf.LambdaWithCloudWatchEvent.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#arc-cdktf.LambdaWithCloudWatchEvent.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="arc-cdktf.LambdaWithCloudWatchEvent.isConstruct"></a>

```typescript
import { LambdaWithCloudWatchEvent } from 'arc-cdktf'

LambdaWithCloudWatchEvent.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="arc-cdktf.LambdaWithCloudWatchEvent.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#arc-cdktf.LambdaWithCloudWatchEvent.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="arc-cdktf.LambdaWithCloudWatchEvent.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


### LambdaWithSns <a name="LambdaWithSns" id="arc-cdktf.LambdaWithSns"></a>

#### Initializers <a name="Initializers" id="arc-cdktf.LambdaWithSns.Initializer"></a>

```typescript
import { LambdaWithSns } from 'arc-cdktf'

new LambdaWithSns(scope: Construct, id: string, config: ILambdaWithSns)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#arc-cdktf.LambdaWithSns.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#arc-cdktf.LambdaWithSns.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdktf.LambdaWithSns.Initializer.parameter.config">config</a></code> | <code><a href="#arc-cdktf.ILambdaWithSns">ILambdaWithSns</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="arc-cdktf.LambdaWithSns.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="arc-cdktf.LambdaWithSns.Initializer.parameter.id"></a>

- *Type:* string

---

##### `config`<sup>Required</sup> <a name="config" id="arc-cdktf.LambdaWithSns.Initializer.parameter.config"></a>

- *Type:* <a href="#arc-cdktf.ILambdaWithSns">ILambdaWithSns</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#arc-cdktf.LambdaWithSns.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="arc-cdktf.LambdaWithSns.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#arc-cdktf.LambdaWithSns.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="arc-cdktf.LambdaWithSns.isConstruct"></a>

```typescript
import { LambdaWithSns } from 'arc-cdktf'

LambdaWithSns.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="arc-cdktf.LambdaWithSns.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#arc-cdktf.LambdaWithSns.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="arc-cdktf.LambdaWithSns.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


### LambdaWithSqs <a name="LambdaWithSqs" id="arc-cdktf.LambdaWithSqs"></a>

#### Initializers <a name="Initializers" id="arc-cdktf.LambdaWithSqs.Initializer"></a>

```typescript
import { LambdaWithSqs } from 'arc-cdktf'

new LambdaWithSqs(scope: Construct, id: string, config: ILambdaWithSqs)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#arc-cdktf.LambdaWithSqs.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#arc-cdktf.LambdaWithSqs.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdktf.LambdaWithSqs.Initializer.parameter.config">config</a></code> | <code><a href="#arc-cdktf.ILambdaWithSqs">ILambdaWithSqs</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="arc-cdktf.LambdaWithSqs.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="arc-cdktf.LambdaWithSqs.Initializer.parameter.id"></a>

- *Type:* string

---

##### `config`<sup>Required</sup> <a name="config" id="arc-cdktf.LambdaWithSqs.Initializer.parameter.config"></a>

- *Type:* <a href="#arc-cdktf.ILambdaWithSqs">ILambdaWithSqs</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#arc-cdktf.LambdaWithSqs.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="arc-cdktf.LambdaWithSqs.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#arc-cdktf.LambdaWithSqs.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="arc-cdktf.LambdaWithSqs.isConstruct"></a>

```typescript
import { LambdaWithSqs } from 'arc-cdktf'

LambdaWithSqs.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="arc-cdktf.LambdaWithSqs.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#arc-cdktf.LambdaWithSqs.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="arc-cdktf.LambdaWithSqs.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---




## Protocols <a name="Protocols" id="Protocols"></a>

### IAcmCertificate <a name="IAcmCertificate" id="arc-cdktf.IAcmCertificate"></a>

- *Implemented By:* <a href="#arc-cdktf.IAcmCertificate">IAcmCertificate</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#arc-cdktf.IAcmCertificate.property.domainName">domainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdktf.IAcmCertificate.property.hostedZoneId">hostedZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdktf.IAcmCertificate.property.ttl">ttl</a></code> | <code>number</code> | *No description.* |

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="arc-cdktf.IAcmCertificate.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

---

##### `hostedZoneId`<sup>Required</sup> <a name="hostedZoneId" id="arc-cdktf.IAcmCertificate.property.hostedZoneId"></a>

```typescript
public readonly hostedZoneId: string;
```

- *Type:* string

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="arc-cdktf.IAcmCertificate.property.ttl"></a>

```typescript
public readonly ttl: number;
```

- *Type:* number

---

### IApiGatewayCustomDomainName <a name="IApiGatewayCustomDomainName" id="arc-cdktf.IApiGatewayCustomDomainName"></a>

- *Implemented By:* <a href="#arc-cdktf.IApiGatewayCustomDomainName">IApiGatewayCustomDomainName</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#arc-cdktf.IApiGatewayCustomDomainName.property.acmCertificateArn">acmCertificateArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdktf.IApiGatewayCustomDomainName.property.apiId">apiId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdktf.IApiGatewayCustomDomainName.property.domainName">domainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdktf.IApiGatewayCustomDomainName.property.hostedZoneId">hostedZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdktf.IApiGatewayCustomDomainName.property.apiStage">apiStage</a></code> | <code>string</code> | *No description.* |

---

##### `acmCertificateArn`<sup>Required</sup> <a name="acmCertificateArn" id="arc-cdktf.IApiGatewayCustomDomainName.property.acmCertificateArn"></a>

```typescript
public readonly acmCertificateArn: string;
```

- *Type:* string

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="arc-cdktf.IApiGatewayCustomDomainName.property.apiId"></a>

```typescript
public readonly apiId: string;
```

- *Type:* string

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="arc-cdktf.IApiGatewayCustomDomainName.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

---

##### `hostedZoneId`<sup>Required</sup> <a name="hostedZoneId" id="arc-cdktf.IApiGatewayCustomDomainName.property.hostedZoneId"></a>

```typescript
public readonly hostedZoneId: string;
```

- *Type:* string

---

##### `apiStage`<sup>Optional</sup> <a name="apiStage" id="arc-cdktf.IApiGatewayCustomDomainName.property.apiStage"></a>

```typescript
public readonly apiStage: string;
```

- *Type:* string

---

### ICreateLambdaRole <a name="ICreateLambdaRole" id="arc-cdktf.ICreateLambdaRole"></a>

- *Implemented By:* <a href="#arc-cdktf.ICreateLambdaRole">ICreateLambdaRole</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#arc-cdktf.ICreateLambdaRole.property.environment">environment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdktf.ICreateLambdaRole.property.iamPolicy">iamPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdktf.ICreateLambdaRole.property.iamRole">iamRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdktf.ICreateLambdaRole.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdktf.ICreateLambdaRole.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |

---

##### `environment`<sup>Required</sup> <a name="environment" id="arc-cdktf.ICreateLambdaRole.property.environment"></a>

```typescript
public readonly environment: string;
```

- *Type:* string

---

##### `iamPolicy`<sup>Required</sup> <a name="iamPolicy" id="arc-cdktf.ICreateLambdaRole.property.iamPolicy"></a>

```typescript
public readonly iamPolicy: string;
```

- *Type:* string

---

##### `iamRole`<sup>Required</sup> <a name="iamRole" id="arc-cdktf.ICreateLambdaRole.property.iamRole"></a>

```typescript
public readonly iamRole: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="arc-cdktf.ICreateLambdaRole.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="arc-cdktf.ICreateLambdaRole.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

### ICreateRole <a name="ICreateRole" id="arc-cdktf.ICreateRole"></a>

- *Implemented By:* <a href="#arc-cdktf.ICreateRole">ICreateRole</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#arc-cdktf.ICreateRole.property.iamPolicy">iamPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdktf.ICreateRole.property.iamRole">iamRole</a></code> | <code>string</code> | *No description.* |

---

##### `iamPolicy`<sup>Required</sup> <a name="iamPolicy" id="arc-cdktf.ICreateRole.property.iamPolicy"></a>

```typescript
public readonly iamPolicy: string;
```

- *Type:* string

---

##### `iamRole`<sup>Required</sup> <a name="iamRole" id="arc-cdktf.ICreateRole.property.iamRole"></a>

```typescript
public readonly iamRole: string;
```

- *Type:* string

---

### ICustomDomainName <a name="ICustomDomainName" id="arc-cdktf.ICustomDomainName"></a>

- *Implemented By:* <a href="#arc-cdktf.ICustomDomainName">ICustomDomainName</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#arc-cdktf.ICustomDomainName.property.domainName">domainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdktf.ICustomDomainName.property.hostedZoneId">hostedZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdktf.ICustomDomainName.property.acmCertificateArn">acmCertificateArn</a></code> | <code>string</code> | *No description.* |

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="arc-cdktf.ICustomDomainName.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

---

##### `hostedZoneId`<sup>Required</sup> <a name="hostedZoneId" id="arc-cdktf.ICustomDomainName.property.hostedZoneId"></a>

```typescript
public readonly hostedZoneId: string;
```

- *Type:* string

---

##### `acmCertificateArn`<sup>Optional</sup> <a name="acmCertificateArn" id="arc-cdktf.ICustomDomainName.property.acmCertificateArn"></a>

```typescript
public readonly acmCertificateArn: string;
```

- *Type:* string

---

### ILambda <a name="ILambda" id="arc-cdktf.ILambda"></a>

- *Implemented By:* <a href="#arc-cdktf.ILambda">ILambda</a>, <a href="#arc-cdktf.ILambdaWithApiGateway">ILambdaWithApiGateway</a>, <a href="#arc-cdktf.ILambdaWithCloudWatchEvent">ILambdaWithCloudWatchEvent</a>, <a href="#arc-cdktf.ILambdaWithSns">ILambdaWithSns</a>, <a href="#arc-cdktf.ILambdaWithSqs">ILambdaWithSqs</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#arc-cdktf.ILambda.property.codePath">codePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdktf.ILambda.property.environment">environment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdktf.ILambda.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdktf.ILambda.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdktf.ILambda.property.createRole">createRole</a></code> | <code><a href="#arc-cdktf.ICreateRole">ICreateRole</a></code> | *No description.* |
| <code><a href="#arc-cdktf.ILambda.property.envVars">envVars</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#arc-cdktf.ILambda.property.invocationData">invocationData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdktf.ILambda.property.layerPath">layerPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdktf.ILambda.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdktf.ILambda.property.s3Bucket">s3Bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#s3_bucket LambdaFunction#s3_bucket}. |

---

##### `codePath`<sup>Required</sup> <a name="codePath" id="arc-cdktf.ILambda.property.codePath"></a>

```typescript
public readonly codePath: string;
```

- *Type:* string

---

##### `environment`<sup>Required</sup> <a name="environment" id="arc-cdktf.ILambda.property.environment"></a>

```typescript
public readonly environment: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="arc-cdktf.ILambda.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="arc-cdktf.ILambda.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `createRole`<sup>Optional</sup> <a name="createRole" id="arc-cdktf.ILambda.property.createRole"></a>

```typescript
public readonly createRole: ICreateRole;
```

- *Type:* <a href="#arc-cdktf.ICreateRole">ICreateRole</a>

---

##### `envVars`<sup>Optional</sup> <a name="envVars" id="arc-cdktf.ILambda.property.envVars"></a>

```typescript
public readonly envVars: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `invocationData`<sup>Optional</sup> <a name="invocationData" id="arc-cdktf.ILambda.property.invocationData"></a>

```typescript
public readonly invocationData: string;
```

- *Type:* string

---

##### `layerPath`<sup>Optional</sup> <a name="layerPath" id="arc-cdktf.ILambda.property.layerPath"></a>

```typescript
public readonly layerPath: string;
```

- *Type:* string

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="arc-cdktf.ILambda.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `s3Bucket`<sup>Optional</sup> <a name="s3Bucket" id="arc-cdktf.ILambda.property.s3Bucket"></a>

```typescript
public readonly s3Bucket: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#s3_bucket LambdaFunction#s3_bucket}.

---

### ILambdaWithApiGateway <a name="ILambdaWithApiGateway" id="arc-cdktf.ILambdaWithApiGateway"></a>

- *Extends:* <a href="#arc-cdktf.ILambda">ILambda</a>

- *Implemented By:* <a href="#arc-cdktf.ILambdaWithApiGateway">ILambdaWithApiGateway</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#arc-cdktf.ILambdaWithApiGateway.property.codePath">codePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdktf.ILambdaWithApiGateway.property.environment">environment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdktf.ILambdaWithApiGateway.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdktf.ILambdaWithApiGateway.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdktf.ILambdaWithApiGateway.property.createRole">createRole</a></code> | <code><a href="#arc-cdktf.ICreateRole">ICreateRole</a></code> | *No description.* |
| <code><a href="#arc-cdktf.ILambdaWithApiGateway.property.envVars">envVars</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#arc-cdktf.ILambdaWithApiGateway.property.invocationData">invocationData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdktf.ILambdaWithApiGateway.property.layerPath">layerPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdktf.ILambdaWithApiGateway.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdktf.ILambdaWithApiGateway.property.s3Bucket">s3Bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#s3_bucket LambdaFunction#s3_bucket}. |
| <code><a href="#arc-cdktf.ILambdaWithApiGateway.property.customDomainName">customDomainName</a></code> | <code><a href="#arc-cdktf.ICustomDomainName">ICustomDomainName</a></code> | *No description.* |

---

##### `codePath`<sup>Required</sup> <a name="codePath" id="arc-cdktf.ILambdaWithApiGateway.property.codePath"></a>

```typescript
public readonly codePath: string;
```

- *Type:* string

---

##### `environment`<sup>Required</sup> <a name="environment" id="arc-cdktf.ILambdaWithApiGateway.property.environment"></a>

```typescript
public readonly environment: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="arc-cdktf.ILambdaWithApiGateway.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="arc-cdktf.ILambdaWithApiGateway.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `createRole`<sup>Optional</sup> <a name="createRole" id="arc-cdktf.ILambdaWithApiGateway.property.createRole"></a>

```typescript
public readonly createRole: ICreateRole;
```

- *Type:* <a href="#arc-cdktf.ICreateRole">ICreateRole</a>

---

##### `envVars`<sup>Optional</sup> <a name="envVars" id="arc-cdktf.ILambdaWithApiGateway.property.envVars"></a>

```typescript
public readonly envVars: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `invocationData`<sup>Optional</sup> <a name="invocationData" id="arc-cdktf.ILambdaWithApiGateway.property.invocationData"></a>

```typescript
public readonly invocationData: string;
```

- *Type:* string

---

##### `layerPath`<sup>Optional</sup> <a name="layerPath" id="arc-cdktf.ILambdaWithApiGateway.property.layerPath"></a>

```typescript
public readonly layerPath: string;
```

- *Type:* string

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="arc-cdktf.ILambdaWithApiGateway.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `s3Bucket`<sup>Optional</sup> <a name="s3Bucket" id="arc-cdktf.ILambdaWithApiGateway.property.s3Bucket"></a>

```typescript
public readonly s3Bucket: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#s3_bucket LambdaFunction#s3_bucket}.

---

##### `customDomainName`<sup>Optional</sup> <a name="customDomainName" id="arc-cdktf.ILambdaWithApiGateway.property.customDomainName"></a>

```typescript
public readonly customDomainName: ICustomDomainName;
```

- *Type:* <a href="#arc-cdktf.ICustomDomainName">ICustomDomainName</a>

---

### ILambdaWithCloudWatchEvent <a name="ILambdaWithCloudWatchEvent" id="arc-cdktf.ILambdaWithCloudWatchEvent"></a>

- *Extends:* <a href="#arc-cdktf.ILambda">ILambda</a>

- *Implemented By:* <a href="#arc-cdktf.ILambdaWithCloudWatchEvent">ILambdaWithCloudWatchEvent</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#arc-cdktf.ILambdaWithCloudWatchEvent.property.codePath">codePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdktf.ILambdaWithCloudWatchEvent.property.environment">environment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdktf.ILambdaWithCloudWatchEvent.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdktf.ILambdaWithCloudWatchEvent.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdktf.ILambdaWithCloudWatchEvent.property.createRole">createRole</a></code> | <code><a href="#arc-cdktf.ICreateRole">ICreateRole</a></code> | *No description.* |
| <code><a href="#arc-cdktf.ILambdaWithCloudWatchEvent.property.envVars">envVars</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#arc-cdktf.ILambdaWithCloudWatchEvent.property.invocationData">invocationData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdktf.ILambdaWithCloudWatchEvent.property.layerPath">layerPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdktf.ILambdaWithCloudWatchEvent.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdktf.ILambdaWithCloudWatchEvent.property.s3Bucket">s3Bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#s3_bucket LambdaFunction#s3_bucket}. |
| <code><a href="#arc-cdktf.ILambdaWithCloudWatchEvent.property.scheduleExpression">scheduleExpression</a></code> | <code>string</code> | *No description.* |

---

##### `codePath`<sup>Required</sup> <a name="codePath" id="arc-cdktf.ILambdaWithCloudWatchEvent.property.codePath"></a>

```typescript
public readonly codePath: string;
```

- *Type:* string

---

##### `environment`<sup>Required</sup> <a name="environment" id="arc-cdktf.ILambdaWithCloudWatchEvent.property.environment"></a>

```typescript
public readonly environment: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="arc-cdktf.ILambdaWithCloudWatchEvent.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="arc-cdktf.ILambdaWithCloudWatchEvent.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `createRole`<sup>Optional</sup> <a name="createRole" id="arc-cdktf.ILambdaWithCloudWatchEvent.property.createRole"></a>

```typescript
public readonly createRole: ICreateRole;
```

- *Type:* <a href="#arc-cdktf.ICreateRole">ICreateRole</a>

---

##### `envVars`<sup>Optional</sup> <a name="envVars" id="arc-cdktf.ILambdaWithCloudWatchEvent.property.envVars"></a>

```typescript
public readonly envVars: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `invocationData`<sup>Optional</sup> <a name="invocationData" id="arc-cdktf.ILambdaWithCloudWatchEvent.property.invocationData"></a>

```typescript
public readonly invocationData: string;
```

- *Type:* string

---

##### `layerPath`<sup>Optional</sup> <a name="layerPath" id="arc-cdktf.ILambdaWithCloudWatchEvent.property.layerPath"></a>

```typescript
public readonly layerPath: string;
```

- *Type:* string

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="arc-cdktf.ILambdaWithCloudWatchEvent.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `s3Bucket`<sup>Optional</sup> <a name="s3Bucket" id="arc-cdktf.ILambdaWithCloudWatchEvent.property.s3Bucket"></a>

```typescript
public readonly s3Bucket: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#s3_bucket LambdaFunction#s3_bucket}.

---

##### `scheduleExpression`<sup>Required</sup> <a name="scheduleExpression" id="arc-cdktf.ILambdaWithCloudWatchEvent.property.scheduleExpression"></a>

```typescript
public readonly scheduleExpression: string;
```

- *Type:* string

---

### ILambdaWithSns <a name="ILambdaWithSns" id="arc-cdktf.ILambdaWithSns"></a>

- *Extends:* <a href="#arc-cdktf.ILambda">ILambda</a>

- *Implemented By:* <a href="#arc-cdktf.ILambdaWithSns">ILambdaWithSns</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#arc-cdktf.ILambdaWithSns.property.codePath">codePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdktf.ILambdaWithSns.property.environment">environment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdktf.ILambdaWithSns.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdktf.ILambdaWithSns.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdktf.ILambdaWithSns.property.createRole">createRole</a></code> | <code><a href="#arc-cdktf.ICreateRole">ICreateRole</a></code> | *No description.* |
| <code><a href="#arc-cdktf.ILambdaWithSns.property.envVars">envVars</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#arc-cdktf.ILambdaWithSns.property.invocationData">invocationData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdktf.ILambdaWithSns.property.layerPath">layerPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdktf.ILambdaWithSns.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdktf.ILambdaWithSns.property.s3Bucket">s3Bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#s3_bucket LambdaFunction#s3_bucket}. |
| <code><a href="#arc-cdktf.ILambdaWithSns.property.kmsMasterKeyId">kmsMasterKeyId</a></code> | <code>string</code> | *No description.* |

---

##### `codePath`<sup>Required</sup> <a name="codePath" id="arc-cdktf.ILambdaWithSns.property.codePath"></a>

```typescript
public readonly codePath: string;
```

- *Type:* string

---

##### `environment`<sup>Required</sup> <a name="environment" id="arc-cdktf.ILambdaWithSns.property.environment"></a>

```typescript
public readonly environment: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="arc-cdktf.ILambdaWithSns.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="arc-cdktf.ILambdaWithSns.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `createRole`<sup>Optional</sup> <a name="createRole" id="arc-cdktf.ILambdaWithSns.property.createRole"></a>

```typescript
public readonly createRole: ICreateRole;
```

- *Type:* <a href="#arc-cdktf.ICreateRole">ICreateRole</a>

---

##### `envVars`<sup>Optional</sup> <a name="envVars" id="arc-cdktf.ILambdaWithSns.property.envVars"></a>

```typescript
public readonly envVars: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `invocationData`<sup>Optional</sup> <a name="invocationData" id="arc-cdktf.ILambdaWithSns.property.invocationData"></a>

```typescript
public readonly invocationData: string;
```

- *Type:* string

---

##### `layerPath`<sup>Optional</sup> <a name="layerPath" id="arc-cdktf.ILambdaWithSns.property.layerPath"></a>

```typescript
public readonly layerPath: string;
```

- *Type:* string

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="arc-cdktf.ILambdaWithSns.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `s3Bucket`<sup>Optional</sup> <a name="s3Bucket" id="arc-cdktf.ILambdaWithSns.property.s3Bucket"></a>

```typescript
public readonly s3Bucket: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#s3_bucket LambdaFunction#s3_bucket}.

---

##### `kmsMasterKeyId`<sup>Required</sup> <a name="kmsMasterKeyId" id="arc-cdktf.ILambdaWithSns.property.kmsMasterKeyId"></a>

```typescript
public readonly kmsMasterKeyId: string;
```

- *Type:* string

---

### ILambdaWithSqs <a name="ILambdaWithSqs" id="arc-cdktf.ILambdaWithSqs"></a>

- *Extends:* <a href="#arc-cdktf.ILambda">ILambda</a>

- *Implemented By:* <a href="#arc-cdktf.ILambdaWithSqs">ILambdaWithSqs</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#arc-cdktf.ILambdaWithSqs.property.codePath">codePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdktf.ILambdaWithSqs.property.environment">environment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdktf.ILambdaWithSqs.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdktf.ILambdaWithSqs.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdktf.ILambdaWithSqs.property.createRole">createRole</a></code> | <code><a href="#arc-cdktf.ICreateRole">ICreateRole</a></code> | *No description.* |
| <code><a href="#arc-cdktf.ILambdaWithSqs.property.envVars">envVars</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#arc-cdktf.ILambdaWithSqs.property.invocationData">invocationData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdktf.ILambdaWithSqs.property.layerPath">layerPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdktf.ILambdaWithSqs.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdktf.ILambdaWithSqs.property.s3Bucket">s3Bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#s3_bucket LambdaFunction#s3_bucket}. |
| <code><a href="#arc-cdktf.ILambdaWithSqs.property.batchSize">batchSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#arc-cdktf.ILambdaWithSqs.property.delaySeconds">delaySeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#arc-cdktf.ILambdaWithSqs.property.kmsDataKeyReusePeriodSeconds">kmsDataKeyReusePeriodSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#arc-cdktf.ILambdaWithSqs.property.kmsMasterKeyId">kmsMasterKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdktf.ILambdaWithSqs.property.maxMessageSize">maxMessageSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#arc-cdktf.ILambdaWithSqs.property.maxReceiveCount">maxReceiveCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#arc-cdktf.ILambdaWithSqs.property.messageRetentionSeconds">messageRetentionSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#arc-cdktf.ILambdaWithSqs.property.receiveWaitTimeSeconds">receiveWaitTimeSeconds</a></code> | <code>number</code> | *No description.* |

---

##### `codePath`<sup>Required</sup> <a name="codePath" id="arc-cdktf.ILambdaWithSqs.property.codePath"></a>

```typescript
public readonly codePath: string;
```

- *Type:* string

---

##### `environment`<sup>Required</sup> <a name="environment" id="arc-cdktf.ILambdaWithSqs.property.environment"></a>

```typescript
public readonly environment: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="arc-cdktf.ILambdaWithSqs.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="arc-cdktf.ILambdaWithSqs.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `createRole`<sup>Optional</sup> <a name="createRole" id="arc-cdktf.ILambdaWithSqs.property.createRole"></a>

```typescript
public readonly createRole: ICreateRole;
```

- *Type:* <a href="#arc-cdktf.ICreateRole">ICreateRole</a>

---

##### `envVars`<sup>Optional</sup> <a name="envVars" id="arc-cdktf.ILambdaWithSqs.property.envVars"></a>

```typescript
public readonly envVars: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `invocationData`<sup>Optional</sup> <a name="invocationData" id="arc-cdktf.ILambdaWithSqs.property.invocationData"></a>

```typescript
public readonly invocationData: string;
```

- *Type:* string

---

##### `layerPath`<sup>Optional</sup> <a name="layerPath" id="arc-cdktf.ILambdaWithSqs.property.layerPath"></a>

```typescript
public readonly layerPath: string;
```

- *Type:* string

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="arc-cdktf.ILambdaWithSqs.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `s3Bucket`<sup>Optional</sup> <a name="s3Bucket" id="arc-cdktf.ILambdaWithSqs.property.s3Bucket"></a>

```typescript
public readonly s3Bucket: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#s3_bucket LambdaFunction#s3_bucket}.

---

##### `batchSize`<sup>Required</sup> <a name="batchSize" id="arc-cdktf.ILambdaWithSqs.property.batchSize"></a>

```typescript
public readonly batchSize: number;
```

- *Type:* number

---

##### `delaySeconds`<sup>Required</sup> <a name="delaySeconds" id="arc-cdktf.ILambdaWithSqs.property.delaySeconds"></a>

```typescript
public readonly delaySeconds: number;
```

- *Type:* number

---

##### `kmsDataKeyReusePeriodSeconds`<sup>Required</sup> <a name="kmsDataKeyReusePeriodSeconds" id="arc-cdktf.ILambdaWithSqs.property.kmsDataKeyReusePeriodSeconds"></a>

```typescript
public readonly kmsDataKeyReusePeriodSeconds: number;
```

- *Type:* number

---

##### `kmsMasterKeyId`<sup>Required</sup> <a name="kmsMasterKeyId" id="arc-cdktf.ILambdaWithSqs.property.kmsMasterKeyId"></a>

```typescript
public readonly kmsMasterKeyId: string;
```

- *Type:* string

---

##### `maxMessageSize`<sup>Required</sup> <a name="maxMessageSize" id="arc-cdktf.ILambdaWithSqs.property.maxMessageSize"></a>

```typescript
public readonly maxMessageSize: number;
```

- *Type:* number

---

##### `maxReceiveCount`<sup>Required</sup> <a name="maxReceiveCount" id="arc-cdktf.ILambdaWithSqs.property.maxReceiveCount"></a>

```typescript
public readonly maxReceiveCount: number;
```

- *Type:* number

---

##### `messageRetentionSeconds`<sup>Required</sup> <a name="messageRetentionSeconds" id="arc-cdktf.ILambdaWithSqs.property.messageRetentionSeconds"></a>

```typescript
public readonly messageRetentionSeconds: number;
```

- *Type:* number

---

##### `receiveWaitTimeSeconds`<sup>Required</sup> <a name="receiveWaitTimeSeconds" id="arc-cdktf.ILambdaWithSqs.property.receiveWaitTimeSeconds"></a>

```typescript
public readonly receiveWaitTimeSeconds: number;
```

- *Type:* number

---

