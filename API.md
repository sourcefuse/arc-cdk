# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiGatewayCustomDomainName <a name="ApiGatewayCustomDomainName" id="arc-cdk.ApiGatewayCustomDomainName"></a>

#### Initializers <a name="Initializers" id="arc-cdk.ApiGatewayCustomDomainName.Initializer"></a>

```typescript
import { ApiGatewayCustomDomainName } from 'arc-cdk'

new ApiGatewayCustomDomainName(scope: Construct, id: string, config: IApiGatewayCustomDomainName)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#arc-cdk.ApiGatewayCustomDomainName.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#arc-cdk.ApiGatewayCustomDomainName.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdk.ApiGatewayCustomDomainName.Initializer.parameter.config">config</a></code> | <code><a href="#arc-cdk.IApiGatewayCustomDomainName">IApiGatewayCustomDomainName</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="arc-cdk.ApiGatewayCustomDomainName.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="arc-cdk.ApiGatewayCustomDomainName.Initializer.parameter.id"></a>

- *Type:* string

---

##### `config`<sup>Required</sup> <a name="config" id="arc-cdk.ApiGatewayCustomDomainName.Initializer.parameter.config"></a>

- *Type:* <a href="#arc-cdk.IApiGatewayCustomDomainName">IApiGatewayCustomDomainName</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#arc-cdk.ApiGatewayCustomDomainName.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="arc-cdk.ApiGatewayCustomDomainName.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#arc-cdk.ApiGatewayCustomDomainName.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="arc-cdk.ApiGatewayCustomDomainName.isConstruct"></a>

```typescript
import { ApiGatewayCustomDomainName } from 'arc-cdk'

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

###### `x`<sup>Required</sup> <a name="x" id="arc-cdk.ApiGatewayCustomDomainName.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#arc-cdk.ApiGatewayCustomDomainName.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="arc-cdk.ApiGatewayCustomDomainName.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


### CreateAcmCertificate <a name="CreateAcmCertificate" id="arc-cdk.CreateAcmCertificate"></a>

#### Initializers <a name="Initializers" id="arc-cdk.CreateAcmCertificate.Initializer"></a>

```typescript
import { CreateAcmCertificate } from 'arc-cdk'

new CreateAcmCertificate(scope: Construct, id: string, config: IAcmCertificate)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#arc-cdk.CreateAcmCertificate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#arc-cdk.CreateAcmCertificate.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdk.CreateAcmCertificate.Initializer.parameter.config">config</a></code> | <code><a href="#arc-cdk.IAcmCertificate">IAcmCertificate</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="arc-cdk.CreateAcmCertificate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="arc-cdk.CreateAcmCertificate.Initializer.parameter.id"></a>

- *Type:* string

---

##### `config`<sup>Required</sup> <a name="config" id="arc-cdk.CreateAcmCertificate.Initializer.parameter.config"></a>

- *Type:* <a href="#arc-cdk.IAcmCertificate">IAcmCertificate</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#arc-cdk.CreateAcmCertificate.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="arc-cdk.CreateAcmCertificate.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#arc-cdk.CreateAcmCertificate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="arc-cdk.CreateAcmCertificate.isConstruct"></a>

```typescript
import { CreateAcmCertificate } from 'arc-cdk'

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

###### `x`<sup>Required</sup> <a name="x" id="arc-cdk.CreateAcmCertificate.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#arc-cdk.CreateAcmCertificate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#arc-cdk.CreateAcmCertificate.property.acmArn">acmArn</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="arc-cdk.CreateAcmCertificate.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `acmArn`<sup>Required</sup> <a name="acmArn" id="arc-cdk.CreateAcmCertificate.property.acmArn"></a>

```typescript
public readonly acmArn: string;
```

- *Type:* string

---


### CreateLambdaRole <a name="CreateLambdaRole" id="arc-cdk.CreateLambdaRole"></a>

#### Initializers <a name="Initializers" id="arc-cdk.CreateLambdaRole.Initializer"></a>

```typescript
import { CreateLambdaRole } from 'arc-cdk'

new CreateLambdaRole(scope: Construct, id: string, config: ICreateLambdaRole)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#arc-cdk.CreateLambdaRole.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#arc-cdk.CreateLambdaRole.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdk.CreateLambdaRole.Initializer.parameter.config">config</a></code> | <code><a href="#arc-cdk.ICreateLambdaRole">ICreateLambdaRole</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="arc-cdk.CreateLambdaRole.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="arc-cdk.CreateLambdaRole.Initializer.parameter.id"></a>

- *Type:* string

---

##### `config`<sup>Required</sup> <a name="config" id="arc-cdk.CreateLambdaRole.Initializer.parameter.config"></a>

- *Type:* <a href="#arc-cdk.ICreateLambdaRole">ICreateLambdaRole</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#arc-cdk.CreateLambdaRole.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="arc-cdk.CreateLambdaRole.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#arc-cdk.CreateLambdaRole.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="arc-cdk.CreateLambdaRole.isConstruct"></a>

```typescript
import { CreateLambdaRole } from 'arc-cdk'

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

###### `x`<sup>Required</sup> <a name="x" id="arc-cdk.CreateLambdaRole.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#arc-cdk.CreateLambdaRole.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#arc-cdk.CreateLambdaRole.property.arn">arn</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="arc-cdk.CreateLambdaRole.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `arn`<sup>Required</sup> <a name="arn" id="arc-cdk.CreateLambdaRole.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---


### Lambda <a name="Lambda" id="arc-cdk.Lambda"></a>

#### Initializers <a name="Initializers" id="arc-cdk.Lambda.Initializer"></a>

```typescript
import { Lambda } from 'arc-cdk'

new Lambda(scope: Construct, id: string, config: ILambda)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#arc-cdk.Lambda.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#arc-cdk.Lambda.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdk.Lambda.Initializer.parameter.config">config</a></code> | <code><a href="#arc-cdk.ILambda">ILambda</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="arc-cdk.Lambda.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="arc-cdk.Lambda.Initializer.parameter.id"></a>

- *Type:* string

---

##### `config`<sup>Required</sup> <a name="config" id="arc-cdk.Lambda.Initializer.parameter.config"></a>

- *Type:* <a href="#arc-cdk.ILambda">ILambda</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#arc-cdk.Lambda.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="arc-cdk.Lambda.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#arc-cdk.Lambda.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="arc-cdk.Lambda.isConstruct"></a>

```typescript
import { Lambda } from 'arc-cdk'

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

###### `x`<sup>Required</sup> <a name="x" id="arc-cdk.Lambda.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#arc-cdk.Lambda.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#arc-cdk.Lambda.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdk.Lambda.property.functionName">functionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdk.Lambda.property.lambdaFunc">lambdaFunc</a></code> | <code>@cdktf/provider-aws.lambdaFunction.LambdaFunction</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="arc-cdk.Lambda.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `arn`<sup>Required</sup> <a name="arn" id="arc-cdk.Lambda.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `functionName`<sup>Required</sup> <a name="functionName" id="arc-cdk.Lambda.property.functionName"></a>

```typescript
public readonly functionName: string;
```

- *Type:* string

---

##### `lambdaFunc`<sup>Required</sup> <a name="lambdaFunc" id="arc-cdk.Lambda.property.lambdaFunc"></a>

```typescript
public readonly lambdaFunc: LambdaFunction;
```

- *Type:* @cdktf/provider-aws.lambdaFunction.LambdaFunction

---


### LambdaWithApiGateway <a name="LambdaWithApiGateway" id="arc-cdk.LambdaWithApiGateway"></a>

#### Initializers <a name="Initializers" id="arc-cdk.LambdaWithApiGateway.Initializer"></a>

```typescript
import { LambdaWithApiGateway } from 'arc-cdk'

new LambdaWithApiGateway(scope: Construct, id: string, config: ILambdaWithApiGateway)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#arc-cdk.LambdaWithApiGateway.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#arc-cdk.LambdaWithApiGateway.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdk.LambdaWithApiGateway.Initializer.parameter.config">config</a></code> | <code><a href="#arc-cdk.ILambdaWithApiGateway">ILambdaWithApiGateway</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="arc-cdk.LambdaWithApiGateway.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="arc-cdk.LambdaWithApiGateway.Initializer.parameter.id"></a>

- *Type:* string

---

##### `config`<sup>Required</sup> <a name="config" id="arc-cdk.LambdaWithApiGateway.Initializer.parameter.config"></a>

- *Type:* <a href="#arc-cdk.ILambdaWithApiGateway">ILambdaWithApiGateway</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#arc-cdk.LambdaWithApiGateway.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="arc-cdk.LambdaWithApiGateway.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#arc-cdk.LambdaWithApiGateway.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="arc-cdk.LambdaWithApiGateway.isConstruct"></a>

```typescript
import { LambdaWithApiGateway } from 'arc-cdk'

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

###### `x`<sup>Required</sup> <a name="x" id="arc-cdk.LambdaWithApiGateway.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#arc-cdk.LambdaWithApiGateway.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#arc-cdk.LambdaWithApiGateway.property.url">url</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="arc-cdk.LambdaWithApiGateway.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `url`<sup>Required</sup> <a name="url" id="arc-cdk.LambdaWithApiGateway.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---


### LambdaWithCloudWatchEvent <a name="LambdaWithCloudWatchEvent" id="arc-cdk.LambdaWithCloudWatchEvent"></a>

#### Initializers <a name="Initializers" id="arc-cdk.LambdaWithCloudWatchEvent.Initializer"></a>

```typescript
import { LambdaWithCloudWatchEvent } from 'arc-cdk'

new LambdaWithCloudWatchEvent(scope: Construct, id: string, config: ILambdaWithCloudWatchEvent)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#arc-cdk.LambdaWithCloudWatchEvent.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#arc-cdk.LambdaWithCloudWatchEvent.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdk.LambdaWithCloudWatchEvent.Initializer.parameter.config">config</a></code> | <code><a href="#arc-cdk.ILambdaWithCloudWatchEvent">ILambdaWithCloudWatchEvent</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="arc-cdk.LambdaWithCloudWatchEvent.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="arc-cdk.LambdaWithCloudWatchEvent.Initializer.parameter.id"></a>

- *Type:* string

---

##### `config`<sup>Required</sup> <a name="config" id="arc-cdk.LambdaWithCloudWatchEvent.Initializer.parameter.config"></a>

- *Type:* <a href="#arc-cdk.ILambdaWithCloudWatchEvent">ILambdaWithCloudWatchEvent</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#arc-cdk.LambdaWithCloudWatchEvent.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="arc-cdk.LambdaWithCloudWatchEvent.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#arc-cdk.LambdaWithCloudWatchEvent.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="arc-cdk.LambdaWithCloudWatchEvent.isConstruct"></a>

```typescript
import { LambdaWithCloudWatchEvent } from 'arc-cdk'

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

###### `x`<sup>Required</sup> <a name="x" id="arc-cdk.LambdaWithCloudWatchEvent.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#arc-cdk.LambdaWithCloudWatchEvent.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="arc-cdk.LambdaWithCloudWatchEvent.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


### LambdaWithSns <a name="LambdaWithSns" id="arc-cdk.LambdaWithSns"></a>

#### Initializers <a name="Initializers" id="arc-cdk.LambdaWithSns.Initializer"></a>

```typescript
import { LambdaWithSns } from 'arc-cdk'

new LambdaWithSns(scope: Construct, id: string, config: ILambdaWithSns)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#arc-cdk.LambdaWithSns.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#arc-cdk.LambdaWithSns.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdk.LambdaWithSns.Initializer.parameter.config">config</a></code> | <code><a href="#arc-cdk.ILambdaWithSns">ILambdaWithSns</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="arc-cdk.LambdaWithSns.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="arc-cdk.LambdaWithSns.Initializer.parameter.id"></a>

- *Type:* string

---

##### `config`<sup>Required</sup> <a name="config" id="arc-cdk.LambdaWithSns.Initializer.parameter.config"></a>

- *Type:* <a href="#arc-cdk.ILambdaWithSns">ILambdaWithSns</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#arc-cdk.LambdaWithSns.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="arc-cdk.LambdaWithSns.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#arc-cdk.LambdaWithSns.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="arc-cdk.LambdaWithSns.isConstruct"></a>

```typescript
import { LambdaWithSns } from 'arc-cdk'

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

###### `x`<sup>Required</sup> <a name="x" id="arc-cdk.LambdaWithSns.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#arc-cdk.LambdaWithSns.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="arc-cdk.LambdaWithSns.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


### LambdaWithSqs <a name="LambdaWithSqs" id="arc-cdk.LambdaWithSqs"></a>

#### Initializers <a name="Initializers" id="arc-cdk.LambdaWithSqs.Initializer"></a>

```typescript
import { LambdaWithSqs } from 'arc-cdk'

new LambdaWithSqs(scope: Construct, id: string, config: ILambdaWithSqs)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#arc-cdk.LambdaWithSqs.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#arc-cdk.LambdaWithSqs.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdk.LambdaWithSqs.Initializer.parameter.config">config</a></code> | <code><a href="#arc-cdk.ILambdaWithSqs">ILambdaWithSqs</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="arc-cdk.LambdaWithSqs.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="arc-cdk.LambdaWithSqs.Initializer.parameter.id"></a>

- *Type:* string

---

##### `config`<sup>Required</sup> <a name="config" id="arc-cdk.LambdaWithSqs.Initializer.parameter.config"></a>

- *Type:* <a href="#arc-cdk.ILambdaWithSqs">ILambdaWithSqs</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#arc-cdk.LambdaWithSqs.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="arc-cdk.LambdaWithSqs.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#arc-cdk.LambdaWithSqs.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="arc-cdk.LambdaWithSqs.isConstruct"></a>

```typescript
import { LambdaWithSqs } from 'arc-cdk'

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

###### `x`<sup>Required</sup> <a name="x" id="arc-cdk.LambdaWithSqs.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#arc-cdk.LambdaWithSqs.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="arc-cdk.LambdaWithSqs.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---




## Protocols <a name="Protocols" id="Protocols"></a>

### IAcmCertificate <a name="IAcmCertificate" id="arc-cdk.IAcmCertificate"></a>

- *Implemented By:* <a href="#arc-cdk.IAcmCertificate">IAcmCertificate</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#arc-cdk.IAcmCertificate.property.domainName">domainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdk.IAcmCertificate.property.hostedZoneId">hostedZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdk.IAcmCertificate.property.ttl">ttl</a></code> | <code>number</code> | *No description.* |

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="arc-cdk.IAcmCertificate.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

---

##### `hostedZoneId`<sup>Required</sup> <a name="hostedZoneId" id="arc-cdk.IAcmCertificate.property.hostedZoneId"></a>

```typescript
public readonly hostedZoneId: string;
```

- *Type:* string

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="arc-cdk.IAcmCertificate.property.ttl"></a>

```typescript
public readonly ttl: number;
```

- *Type:* number

---

### IApiGatewayCustomDomainName <a name="IApiGatewayCustomDomainName" id="arc-cdk.IApiGatewayCustomDomainName"></a>

- *Implemented By:* <a href="#arc-cdk.IApiGatewayCustomDomainName">IApiGatewayCustomDomainName</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#arc-cdk.IApiGatewayCustomDomainName.property.acmCertificateArn">acmCertificateArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdk.IApiGatewayCustomDomainName.property.apiId">apiId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdk.IApiGatewayCustomDomainName.property.domainName">domainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdk.IApiGatewayCustomDomainName.property.hostedZoneId">hostedZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdk.IApiGatewayCustomDomainName.property.apiStage">apiStage</a></code> | <code>string</code> | *No description.* |

---

##### `acmCertificateArn`<sup>Required</sup> <a name="acmCertificateArn" id="arc-cdk.IApiGatewayCustomDomainName.property.acmCertificateArn"></a>

```typescript
public readonly acmCertificateArn: string;
```

- *Type:* string

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="arc-cdk.IApiGatewayCustomDomainName.property.apiId"></a>

```typescript
public readonly apiId: string;
```

- *Type:* string

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="arc-cdk.IApiGatewayCustomDomainName.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

---

##### `hostedZoneId`<sup>Required</sup> <a name="hostedZoneId" id="arc-cdk.IApiGatewayCustomDomainName.property.hostedZoneId"></a>

```typescript
public readonly hostedZoneId: string;
```

- *Type:* string

---

##### `apiStage`<sup>Optional</sup> <a name="apiStage" id="arc-cdk.IApiGatewayCustomDomainName.property.apiStage"></a>

```typescript
public readonly apiStage: string;
```

- *Type:* string

---

### ICreateLambdaRole <a name="ICreateLambdaRole" id="arc-cdk.ICreateLambdaRole"></a>

- *Implemented By:* <a href="#arc-cdk.ICreateLambdaRole">ICreateLambdaRole</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#arc-cdk.ICreateLambdaRole.property.environment">environment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdk.ICreateLambdaRole.property.iamPolicy">iamPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdk.ICreateLambdaRole.property.iamRole">iamRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdk.ICreateLambdaRole.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdk.ICreateLambdaRole.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |

---

##### `environment`<sup>Required</sup> <a name="environment" id="arc-cdk.ICreateLambdaRole.property.environment"></a>

```typescript
public readonly environment: string;
```

- *Type:* string

---

##### `iamPolicy`<sup>Required</sup> <a name="iamPolicy" id="arc-cdk.ICreateLambdaRole.property.iamPolicy"></a>

```typescript
public readonly iamPolicy: string;
```

- *Type:* string

---

##### `iamRole`<sup>Required</sup> <a name="iamRole" id="arc-cdk.ICreateLambdaRole.property.iamRole"></a>

```typescript
public readonly iamRole: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="arc-cdk.ICreateLambdaRole.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="arc-cdk.ICreateLambdaRole.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

### ICreateRole <a name="ICreateRole" id="arc-cdk.ICreateRole"></a>

- *Implemented By:* <a href="#arc-cdk.ICreateRole">ICreateRole</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#arc-cdk.ICreateRole.property.iamPolicy">iamPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdk.ICreateRole.property.iamRole">iamRole</a></code> | <code>string</code> | *No description.* |

---

##### `iamPolicy`<sup>Required</sup> <a name="iamPolicy" id="arc-cdk.ICreateRole.property.iamPolicy"></a>

```typescript
public readonly iamPolicy: string;
```

- *Type:* string

---

##### `iamRole`<sup>Required</sup> <a name="iamRole" id="arc-cdk.ICreateRole.property.iamRole"></a>

```typescript
public readonly iamRole: string;
```

- *Type:* string

---

### ICustomDomainName <a name="ICustomDomainName" id="arc-cdk.ICustomDomainName"></a>

- *Implemented By:* <a href="#arc-cdk.ICustomDomainName">ICustomDomainName</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#arc-cdk.ICustomDomainName.property.domainName">domainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdk.ICustomDomainName.property.hostedZoneId">hostedZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdk.ICustomDomainName.property.acmCertificateArn">acmCertificateArn</a></code> | <code>string</code> | *No description.* |

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="arc-cdk.ICustomDomainName.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

---

##### `hostedZoneId`<sup>Required</sup> <a name="hostedZoneId" id="arc-cdk.ICustomDomainName.property.hostedZoneId"></a>

```typescript
public readonly hostedZoneId: string;
```

- *Type:* string

---

##### `acmCertificateArn`<sup>Optional</sup> <a name="acmCertificateArn" id="arc-cdk.ICustomDomainName.property.acmCertificateArn"></a>

```typescript
public readonly acmCertificateArn: string;
```

- *Type:* string

---

### ILambda <a name="ILambda" id="arc-cdk.ILambda"></a>

- *Implemented By:* <a href="#arc-cdk.ILambda">ILambda</a>, <a href="#arc-cdk.ILambdaWithApiGateway">ILambdaWithApiGateway</a>, <a href="#arc-cdk.ILambdaWithCloudWatchEvent">ILambdaWithCloudWatchEvent</a>, <a href="#arc-cdk.ILambdaWithSns">ILambdaWithSns</a>, <a href="#arc-cdk.ILambdaWithSqs">ILambdaWithSqs</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#arc-cdk.ILambda.property.codePath">codePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdk.ILambda.property.environment">environment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdk.ILambda.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdk.ILambda.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdk.ILambda.property.createRole">createRole</a></code> | <code><a href="#arc-cdk.ICreateRole">ICreateRole</a></code> | *No description.* |
| <code><a href="#arc-cdk.ILambda.property.envVars">envVars</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#arc-cdk.ILambda.property.invocationData">invocationData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdk.ILambda.property.layerPath">layerPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdk.ILambda.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdk.ILambda.property.s3Bucket">s3Bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#s3_bucket LambdaFunction#s3_bucket}. |

---

##### `codePath`<sup>Required</sup> <a name="codePath" id="arc-cdk.ILambda.property.codePath"></a>

```typescript
public readonly codePath: string;
```

- *Type:* string

---

##### `environment`<sup>Required</sup> <a name="environment" id="arc-cdk.ILambda.property.environment"></a>

```typescript
public readonly environment: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="arc-cdk.ILambda.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="arc-cdk.ILambda.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `createRole`<sup>Optional</sup> <a name="createRole" id="arc-cdk.ILambda.property.createRole"></a>

```typescript
public readonly createRole: ICreateRole;
```

- *Type:* <a href="#arc-cdk.ICreateRole">ICreateRole</a>

---

##### `envVars`<sup>Optional</sup> <a name="envVars" id="arc-cdk.ILambda.property.envVars"></a>

```typescript
public readonly envVars: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `invocationData`<sup>Optional</sup> <a name="invocationData" id="arc-cdk.ILambda.property.invocationData"></a>

```typescript
public readonly invocationData: string;
```

- *Type:* string

---

##### `layerPath`<sup>Optional</sup> <a name="layerPath" id="arc-cdk.ILambda.property.layerPath"></a>

```typescript
public readonly layerPath: string;
```

- *Type:* string

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="arc-cdk.ILambda.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `s3Bucket`<sup>Optional</sup> <a name="s3Bucket" id="arc-cdk.ILambda.property.s3Bucket"></a>

```typescript
public readonly s3Bucket: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#s3_bucket LambdaFunction#s3_bucket}.

---

### ILambdaWithApiGateway <a name="ILambdaWithApiGateway" id="arc-cdk.ILambdaWithApiGateway"></a>

- *Extends:* <a href="#arc-cdk.ILambda">ILambda</a>

- *Implemented By:* <a href="#arc-cdk.ILambdaWithApiGateway">ILambdaWithApiGateway</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#arc-cdk.ILambdaWithApiGateway.property.codePath">codePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdk.ILambdaWithApiGateway.property.environment">environment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdk.ILambdaWithApiGateway.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdk.ILambdaWithApiGateway.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdk.ILambdaWithApiGateway.property.createRole">createRole</a></code> | <code><a href="#arc-cdk.ICreateRole">ICreateRole</a></code> | *No description.* |
| <code><a href="#arc-cdk.ILambdaWithApiGateway.property.envVars">envVars</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#arc-cdk.ILambdaWithApiGateway.property.invocationData">invocationData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdk.ILambdaWithApiGateway.property.layerPath">layerPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdk.ILambdaWithApiGateway.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdk.ILambdaWithApiGateway.property.s3Bucket">s3Bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#s3_bucket LambdaFunction#s3_bucket}. |
| <code><a href="#arc-cdk.ILambdaWithApiGateway.property.customDomainName">customDomainName</a></code> | <code><a href="#arc-cdk.ICustomDomainName">ICustomDomainName</a></code> | *No description.* |

---

##### `codePath`<sup>Required</sup> <a name="codePath" id="arc-cdk.ILambdaWithApiGateway.property.codePath"></a>

```typescript
public readonly codePath: string;
```

- *Type:* string

---

##### `environment`<sup>Required</sup> <a name="environment" id="arc-cdk.ILambdaWithApiGateway.property.environment"></a>

```typescript
public readonly environment: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="arc-cdk.ILambdaWithApiGateway.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="arc-cdk.ILambdaWithApiGateway.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `createRole`<sup>Optional</sup> <a name="createRole" id="arc-cdk.ILambdaWithApiGateway.property.createRole"></a>

```typescript
public readonly createRole: ICreateRole;
```

- *Type:* <a href="#arc-cdk.ICreateRole">ICreateRole</a>

---

##### `envVars`<sup>Optional</sup> <a name="envVars" id="arc-cdk.ILambdaWithApiGateway.property.envVars"></a>

```typescript
public readonly envVars: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `invocationData`<sup>Optional</sup> <a name="invocationData" id="arc-cdk.ILambdaWithApiGateway.property.invocationData"></a>

```typescript
public readonly invocationData: string;
```

- *Type:* string

---

##### `layerPath`<sup>Optional</sup> <a name="layerPath" id="arc-cdk.ILambdaWithApiGateway.property.layerPath"></a>

```typescript
public readonly layerPath: string;
```

- *Type:* string

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="arc-cdk.ILambdaWithApiGateway.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `s3Bucket`<sup>Optional</sup> <a name="s3Bucket" id="arc-cdk.ILambdaWithApiGateway.property.s3Bucket"></a>

```typescript
public readonly s3Bucket: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#s3_bucket LambdaFunction#s3_bucket}.

---

##### `customDomainName`<sup>Optional</sup> <a name="customDomainName" id="arc-cdk.ILambdaWithApiGateway.property.customDomainName"></a>

```typescript
public readonly customDomainName: ICustomDomainName;
```

- *Type:* <a href="#arc-cdk.ICustomDomainName">ICustomDomainName</a>

---

### ILambdaWithCloudWatchEvent <a name="ILambdaWithCloudWatchEvent" id="arc-cdk.ILambdaWithCloudWatchEvent"></a>

- *Extends:* <a href="#arc-cdk.ILambda">ILambda</a>

- *Implemented By:* <a href="#arc-cdk.ILambdaWithCloudWatchEvent">ILambdaWithCloudWatchEvent</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#arc-cdk.ILambdaWithCloudWatchEvent.property.codePath">codePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdk.ILambdaWithCloudWatchEvent.property.environment">environment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdk.ILambdaWithCloudWatchEvent.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdk.ILambdaWithCloudWatchEvent.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdk.ILambdaWithCloudWatchEvent.property.createRole">createRole</a></code> | <code><a href="#arc-cdk.ICreateRole">ICreateRole</a></code> | *No description.* |
| <code><a href="#arc-cdk.ILambdaWithCloudWatchEvent.property.envVars">envVars</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#arc-cdk.ILambdaWithCloudWatchEvent.property.invocationData">invocationData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdk.ILambdaWithCloudWatchEvent.property.layerPath">layerPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdk.ILambdaWithCloudWatchEvent.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdk.ILambdaWithCloudWatchEvent.property.s3Bucket">s3Bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#s3_bucket LambdaFunction#s3_bucket}. |
| <code><a href="#arc-cdk.ILambdaWithCloudWatchEvent.property.scheduleExpression">scheduleExpression</a></code> | <code>string</code> | *No description.* |

---

##### `codePath`<sup>Required</sup> <a name="codePath" id="arc-cdk.ILambdaWithCloudWatchEvent.property.codePath"></a>

```typescript
public readonly codePath: string;
```

- *Type:* string

---

##### `environment`<sup>Required</sup> <a name="environment" id="arc-cdk.ILambdaWithCloudWatchEvent.property.environment"></a>

```typescript
public readonly environment: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="arc-cdk.ILambdaWithCloudWatchEvent.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="arc-cdk.ILambdaWithCloudWatchEvent.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `createRole`<sup>Optional</sup> <a name="createRole" id="arc-cdk.ILambdaWithCloudWatchEvent.property.createRole"></a>

```typescript
public readonly createRole: ICreateRole;
```

- *Type:* <a href="#arc-cdk.ICreateRole">ICreateRole</a>

---

##### `envVars`<sup>Optional</sup> <a name="envVars" id="arc-cdk.ILambdaWithCloudWatchEvent.property.envVars"></a>

```typescript
public readonly envVars: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `invocationData`<sup>Optional</sup> <a name="invocationData" id="arc-cdk.ILambdaWithCloudWatchEvent.property.invocationData"></a>

```typescript
public readonly invocationData: string;
```

- *Type:* string

---

##### `layerPath`<sup>Optional</sup> <a name="layerPath" id="arc-cdk.ILambdaWithCloudWatchEvent.property.layerPath"></a>

```typescript
public readonly layerPath: string;
```

- *Type:* string

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="arc-cdk.ILambdaWithCloudWatchEvent.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `s3Bucket`<sup>Optional</sup> <a name="s3Bucket" id="arc-cdk.ILambdaWithCloudWatchEvent.property.s3Bucket"></a>

```typescript
public readonly s3Bucket: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#s3_bucket LambdaFunction#s3_bucket}.

---

##### `scheduleExpression`<sup>Required</sup> <a name="scheduleExpression" id="arc-cdk.ILambdaWithCloudWatchEvent.property.scheduleExpression"></a>

```typescript
public readonly scheduleExpression: string;
```

- *Type:* string

---

### ILambdaWithSns <a name="ILambdaWithSns" id="arc-cdk.ILambdaWithSns"></a>

- *Extends:* <a href="#arc-cdk.ILambda">ILambda</a>

- *Implemented By:* <a href="#arc-cdk.ILambdaWithSns">ILambdaWithSns</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#arc-cdk.ILambdaWithSns.property.codePath">codePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdk.ILambdaWithSns.property.environment">environment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdk.ILambdaWithSns.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdk.ILambdaWithSns.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdk.ILambdaWithSns.property.createRole">createRole</a></code> | <code><a href="#arc-cdk.ICreateRole">ICreateRole</a></code> | *No description.* |
| <code><a href="#arc-cdk.ILambdaWithSns.property.envVars">envVars</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#arc-cdk.ILambdaWithSns.property.invocationData">invocationData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdk.ILambdaWithSns.property.layerPath">layerPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdk.ILambdaWithSns.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdk.ILambdaWithSns.property.s3Bucket">s3Bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#s3_bucket LambdaFunction#s3_bucket}. |
| <code><a href="#arc-cdk.ILambdaWithSns.property.kmsMasterKeyId">kmsMasterKeyId</a></code> | <code>string</code> | *No description.* |

---

##### `codePath`<sup>Required</sup> <a name="codePath" id="arc-cdk.ILambdaWithSns.property.codePath"></a>

```typescript
public readonly codePath: string;
```

- *Type:* string

---

##### `environment`<sup>Required</sup> <a name="environment" id="arc-cdk.ILambdaWithSns.property.environment"></a>

```typescript
public readonly environment: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="arc-cdk.ILambdaWithSns.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="arc-cdk.ILambdaWithSns.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `createRole`<sup>Optional</sup> <a name="createRole" id="arc-cdk.ILambdaWithSns.property.createRole"></a>

```typescript
public readonly createRole: ICreateRole;
```

- *Type:* <a href="#arc-cdk.ICreateRole">ICreateRole</a>

---

##### `envVars`<sup>Optional</sup> <a name="envVars" id="arc-cdk.ILambdaWithSns.property.envVars"></a>

```typescript
public readonly envVars: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `invocationData`<sup>Optional</sup> <a name="invocationData" id="arc-cdk.ILambdaWithSns.property.invocationData"></a>

```typescript
public readonly invocationData: string;
```

- *Type:* string

---

##### `layerPath`<sup>Optional</sup> <a name="layerPath" id="arc-cdk.ILambdaWithSns.property.layerPath"></a>

```typescript
public readonly layerPath: string;
```

- *Type:* string

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="arc-cdk.ILambdaWithSns.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `s3Bucket`<sup>Optional</sup> <a name="s3Bucket" id="arc-cdk.ILambdaWithSns.property.s3Bucket"></a>

```typescript
public readonly s3Bucket: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#s3_bucket LambdaFunction#s3_bucket}.

---

##### `kmsMasterKeyId`<sup>Required</sup> <a name="kmsMasterKeyId" id="arc-cdk.ILambdaWithSns.property.kmsMasterKeyId"></a>

```typescript
public readonly kmsMasterKeyId: string;
```

- *Type:* string

---

### ILambdaWithSqs <a name="ILambdaWithSqs" id="arc-cdk.ILambdaWithSqs"></a>

- *Extends:* <a href="#arc-cdk.ILambda">ILambda</a>

- *Implemented By:* <a href="#arc-cdk.ILambdaWithSqs">ILambdaWithSqs</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#arc-cdk.ILambdaWithSqs.property.codePath">codePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdk.ILambdaWithSqs.property.environment">environment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdk.ILambdaWithSqs.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdk.ILambdaWithSqs.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdk.ILambdaWithSqs.property.createRole">createRole</a></code> | <code><a href="#arc-cdk.ICreateRole">ICreateRole</a></code> | *No description.* |
| <code><a href="#arc-cdk.ILambdaWithSqs.property.envVars">envVars</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#arc-cdk.ILambdaWithSqs.property.invocationData">invocationData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdk.ILambdaWithSqs.property.layerPath">layerPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdk.ILambdaWithSqs.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdk.ILambdaWithSqs.property.s3Bucket">s3Bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#s3_bucket LambdaFunction#s3_bucket}. |
| <code><a href="#arc-cdk.ILambdaWithSqs.property.batchSize">batchSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#arc-cdk.ILambdaWithSqs.property.delaySeconds">delaySeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#arc-cdk.ILambdaWithSqs.property.kmsDataKeyReusePeriodSeconds">kmsDataKeyReusePeriodSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#arc-cdk.ILambdaWithSqs.property.kmsMasterKeyId">kmsMasterKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdk.ILambdaWithSqs.property.maxMessageSize">maxMessageSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#arc-cdk.ILambdaWithSqs.property.maxReceiveCount">maxReceiveCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#arc-cdk.ILambdaWithSqs.property.messageRetentionSeconds">messageRetentionSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#arc-cdk.ILambdaWithSqs.property.receiveWaitTimeSeconds">receiveWaitTimeSeconds</a></code> | <code>number</code> | *No description.* |

---

##### `codePath`<sup>Required</sup> <a name="codePath" id="arc-cdk.ILambdaWithSqs.property.codePath"></a>

```typescript
public readonly codePath: string;
```

- *Type:* string

---

##### `environment`<sup>Required</sup> <a name="environment" id="arc-cdk.ILambdaWithSqs.property.environment"></a>

```typescript
public readonly environment: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="arc-cdk.ILambdaWithSqs.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="arc-cdk.ILambdaWithSqs.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `createRole`<sup>Optional</sup> <a name="createRole" id="arc-cdk.ILambdaWithSqs.property.createRole"></a>

```typescript
public readonly createRole: ICreateRole;
```

- *Type:* <a href="#arc-cdk.ICreateRole">ICreateRole</a>

---

##### `envVars`<sup>Optional</sup> <a name="envVars" id="arc-cdk.ILambdaWithSqs.property.envVars"></a>

```typescript
public readonly envVars: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `invocationData`<sup>Optional</sup> <a name="invocationData" id="arc-cdk.ILambdaWithSqs.property.invocationData"></a>

```typescript
public readonly invocationData: string;
```

- *Type:* string

---

##### `layerPath`<sup>Optional</sup> <a name="layerPath" id="arc-cdk.ILambdaWithSqs.property.layerPath"></a>

```typescript
public readonly layerPath: string;
```

- *Type:* string

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="arc-cdk.ILambdaWithSqs.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `s3Bucket`<sup>Optional</sup> <a name="s3Bucket" id="arc-cdk.ILambdaWithSqs.property.s3Bucket"></a>

```typescript
public readonly s3Bucket: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#s3_bucket LambdaFunction#s3_bucket}.

---

##### `batchSize`<sup>Required</sup> <a name="batchSize" id="arc-cdk.ILambdaWithSqs.property.batchSize"></a>

```typescript
public readonly batchSize: number;
```

- *Type:* number

---

##### `delaySeconds`<sup>Required</sup> <a name="delaySeconds" id="arc-cdk.ILambdaWithSqs.property.delaySeconds"></a>

```typescript
public readonly delaySeconds: number;
```

- *Type:* number

---

##### `kmsDataKeyReusePeriodSeconds`<sup>Required</sup> <a name="kmsDataKeyReusePeriodSeconds" id="arc-cdk.ILambdaWithSqs.property.kmsDataKeyReusePeriodSeconds"></a>

```typescript
public readonly kmsDataKeyReusePeriodSeconds: number;
```

- *Type:* number

---

##### `kmsMasterKeyId`<sup>Required</sup> <a name="kmsMasterKeyId" id="arc-cdk.ILambdaWithSqs.property.kmsMasterKeyId"></a>

```typescript
public readonly kmsMasterKeyId: string;
```

- *Type:* string

---

##### `maxMessageSize`<sup>Required</sup> <a name="maxMessageSize" id="arc-cdk.ILambdaWithSqs.property.maxMessageSize"></a>

```typescript
public readonly maxMessageSize: number;
```

- *Type:* number

---

##### `maxReceiveCount`<sup>Required</sup> <a name="maxReceiveCount" id="arc-cdk.ILambdaWithSqs.property.maxReceiveCount"></a>

```typescript
public readonly maxReceiveCount: number;
```

- *Type:* number

---

##### `messageRetentionSeconds`<sup>Required</sup> <a name="messageRetentionSeconds" id="arc-cdk.ILambdaWithSqs.property.messageRetentionSeconds"></a>

```typescript
public readonly messageRetentionSeconds: number;
```

- *Type:* number

---

##### `receiveWaitTimeSeconds`<sup>Required</sup> <a name="receiveWaitTimeSeconds" id="arc-cdk.ILambdaWithSqs.property.receiveWaitTimeSeconds"></a>

```typescript
public readonly receiveWaitTimeSeconds: number;
```

- *Type:* number

---

