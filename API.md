

<!-- toc -->

- [API Reference](#api-reference-)
  * [Constructs](#constructs-)
    + [ApiGatewayCustomDomainName](#apigatewaycustomdomainname-)
    + [CreateAcmCertificate](#createacmcertificate-)
    + [CreateEcrImage](#createecrimage-)
    + [CreateEcrRepository](#createecrrepository-)
    + [CreateLambdaRole](#createlambdarole-)
    + [DbModule](#dbmodule-)
    + [ElastiCache](#elasticache-)
    + [Lambda](#lambda-)
    + [LambdaWithApiGateway](#lambdawithapigateway-)
    + [LambdaWithCloudWatchEvent](#lambdawithcloudwatchevent-)
    + [LambdaWithSns](#lambdawithsns-)
    + [LambdaWithSqs](#lambdawithsqs-)
  * [Structs](#structs-)
    + [DbModuleConfig](#dbmoduleconfig-)
    + [ElastiCacheConfig](#elasticacheconfig-)
  * [Protocols](#protocols-)
    + [IAcmCertificate](#iacmcertificate-)
    + [IApiGatewayCustomDomainName](#iapigatewaycustomdomainname-)
    + [ICreateEcrImage](#icreateecrimage-)
    + [ICreateEcrRepository](#icreateecrrepository-)
    + [ICreateLambdaRole](#icreatelambdarole-)
    + [ICreateRole](#icreaterole-)
    + [ICustomDomainName](#icustomdomainname-)
    + [IEnvironmentVars](#ienvironmentvars-)
    + [ILambda](#ilambda-)
    + [ILambdaWithApiGateway](#ilambdawithapigateway-)
    + [ILambdaWithCloudWatchEvent](#ilambdawithcloudwatchevent-)
    + [ILambdaWithSns](#ilambdawithsns-)
    + [ILambdaWithSqs](#ilambdawithsqs-)

<!-- tocstop -->

# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiGatewayCustomDomainName <a name="ApiGatewayCustomDomainName" id="arc-cdk.ApiGatewayCustomDomainName"></a>

Represents a custom domain name for an API Gateway.

#### Initializers <a name="Initializers" id="arc-cdk.ApiGatewayCustomDomainName.Initializer"></a>

```typescript
import { ApiGatewayCustomDomainName } from 'arc-cdk'

new ApiGatewayCustomDomainName(scope: Construct, id: string, config: IApiGatewayCustomDomainName)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#arc-cdk.ApiGatewayCustomDomainName.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The parent construct. |
| <code><a href="#arc-cdk.ApiGatewayCustomDomainName.Initializer.parameter.id">id</a></code> | <code>string</code> | The ID of the construct. |
| <code><a href="#arc-cdk.ApiGatewayCustomDomainName.Initializer.parameter.config">config</a></code> | <code><a href="#arc-cdk.IApiGatewayCustomDomainName">IApiGatewayCustomDomainName</a></code> | The configuration for the custom domain name. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="arc-cdk.ApiGatewayCustomDomainName.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The parent construct.

---

##### `id`<sup>Required</sup> <a name="id" id="arc-cdk.ApiGatewayCustomDomainName.Initializer.parameter.id"></a>

- *Type:* string

The ID of the construct.

---

##### `config`<sup>Required</sup> <a name="config" id="arc-cdk.ApiGatewayCustomDomainName.Initializer.parameter.config"></a>

- *Type:* <a href="#arc-cdk.IApiGatewayCustomDomainName">IApiGatewayCustomDomainName</a>

The configuration for the custom domain name.

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

Creates an ACM Certificate with the specified domain name and hosted zone ID.

#### Initializers <a name="Initializers" id="arc-cdk.CreateAcmCertificate.Initializer"></a>

```typescript
import { CreateAcmCertificate } from 'arc-cdk'

new CreateAcmCertificate(scope: Construct, id: string, config: IAcmCertificate)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#arc-cdk.CreateAcmCertificate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The parent construct of this stack. |
| <code><a href="#arc-cdk.CreateAcmCertificate.Initializer.parameter.id">id</a></code> | <code>string</code> | The ID of the construct. |
| <code><a href="#arc-cdk.CreateAcmCertificate.Initializer.parameter.config">config</a></code> | <code><a href="#arc-cdk.IAcmCertificate">IAcmCertificate</a></code> | The configuration of the ACM Certificate. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="arc-cdk.CreateAcmCertificate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The parent construct of this stack.

---

##### `id`<sup>Required</sup> <a name="id" id="arc-cdk.CreateAcmCertificate.Initializer.parameter.id"></a>

- *Type:* string

The ID of the construct.

---

##### `config`<sup>Required</sup> <a name="config" id="arc-cdk.CreateAcmCertificate.Initializer.parameter.config"></a>

- *Type:* <a href="#arc-cdk.IAcmCertificate">IAcmCertificate</a>

The configuration of the ACM Certificate.

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
| <code><a href="#arc-cdk.CreateAcmCertificate.property.acmArn">acmArn</a></code> | <code>string</code> | The ARN of the created ACM certificate. |

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

The ARN of the created ACM certificate.

---


### CreateEcrImage <a name="CreateEcrImage" id="arc-cdk.CreateEcrImage"></a>

#### Initializers <a name="Initializers" id="arc-cdk.CreateEcrImage.Initializer"></a>

```typescript
import { CreateEcrImage } from 'arc-cdk'

new CreateEcrImage(scope: Construct, id: string, config: ICreateEcrImage)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#arc-cdk.CreateEcrImage.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The parent Construct of this stack. |
| <code><a href="#arc-cdk.CreateEcrImage.Initializer.parameter.id">id</a></code> | <code>string</code> | The ID of this construct. |
| <code><a href="#arc-cdk.CreateEcrImage.Initializer.parameter.config">config</a></code> | <code><a href="#arc-cdk.ICreateEcrImage">ICreateEcrImage</a></code> | The configuration options for creating the ECR image. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="arc-cdk.CreateEcrImage.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The parent Construct of this stack.

---

##### `id`<sup>Required</sup> <a name="id" id="arc-cdk.CreateEcrImage.Initializer.parameter.id"></a>

- *Type:* string

The ID of this construct.

---

##### `config`<sup>Required</sup> <a name="config" id="arc-cdk.CreateEcrImage.Initializer.parameter.config"></a>

- *Type:* <a href="#arc-cdk.ICreateEcrImage">ICreateEcrImage</a>

The configuration options for creating the ECR image.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#arc-cdk.CreateEcrImage.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="arc-cdk.CreateEcrImage.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#arc-cdk.CreateEcrImage.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="arc-cdk.CreateEcrImage.isConstruct"></a>

```typescript
import { CreateEcrImage } from 'arc-cdk'

CreateEcrImage.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="arc-cdk.CreateEcrImage.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#arc-cdk.CreateEcrImage.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#arc-cdk.CreateEcrImage.property.ecrImage">ecrImage</a></code> | <code>@cdktf/provider-docker.registryImage.RegistryImage</code> | The created ECR image. |

---

##### `node`<sup>Required</sup> <a name="node" id="arc-cdk.CreateEcrImage.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `ecrImage`<sup>Required</sup> <a name="ecrImage" id="arc-cdk.CreateEcrImage.property.ecrImage"></a>

```typescript
public readonly ecrImage: RegistryImage;
```

- *Type:* @cdktf/provider-docker.registryImage.RegistryImage

The created ECR image.

---


### CreateEcrRepository <a name="CreateEcrRepository" id="arc-cdk.CreateEcrRepository"></a>

#### Initializers <a name="Initializers" id="arc-cdk.CreateEcrRepository.Initializer"></a>

```typescript
import { CreateEcrRepository } from 'arc-cdk'

new CreateEcrRepository(scope: Construct, id: string, config: ICreateEcrRepository)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#arc-cdk.CreateEcrRepository.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The parent construct of this stack. |
| <code><a href="#arc-cdk.CreateEcrRepository.Initializer.parameter.id">id</a></code> | <code>string</code> | The ID of the construct. |
| <code><a href="#arc-cdk.CreateEcrRepository.Initializer.parameter.config">config</a></code> | <code><a href="#arc-cdk.ICreateEcrRepository">ICreateEcrRepository</a></code> | The configuration options for creating the Amazon ECR repository. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="arc-cdk.CreateEcrRepository.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The parent construct of this stack.

---

##### `id`<sup>Required</sup> <a name="id" id="arc-cdk.CreateEcrRepository.Initializer.parameter.id"></a>

- *Type:* string

The ID of the construct.

---

##### `config`<sup>Required</sup> <a name="config" id="arc-cdk.CreateEcrRepository.Initializer.parameter.config"></a>

- *Type:* <a href="#arc-cdk.ICreateEcrRepository">ICreateEcrRepository</a>

The configuration options for creating the Amazon ECR repository.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#arc-cdk.CreateEcrRepository.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="arc-cdk.CreateEcrRepository.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#arc-cdk.CreateEcrRepository.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="arc-cdk.CreateEcrRepository.isConstruct"></a>

```typescript
import { CreateEcrRepository } from 'arc-cdk'

CreateEcrRepository.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="arc-cdk.CreateEcrRepository.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#arc-cdk.CreateEcrRepository.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#arc-cdk.CreateEcrRepository.property.ecrRepository">ecrRepository</a></code> | <code>@cdktf/provider-aws.ecrRepository.EcrRepository</code> | The created Amazon ECR repository. |

---

##### `node`<sup>Required</sup> <a name="node" id="arc-cdk.CreateEcrRepository.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `ecrRepository`<sup>Required</sup> <a name="ecrRepository" id="arc-cdk.CreateEcrRepository.property.ecrRepository"></a>

```typescript
public readonly ecrRepository: EcrRepository;
```

- *Type:* @cdktf/provider-aws.ecrRepository.EcrRepository

The created Amazon ECR repository.

---


### CreateLambdaRole <a name="CreateLambdaRole" id="arc-cdk.CreateLambdaRole"></a>

#### Initializers <a name="Initializers" id="arc-cdk.CreateLambdaRole.Initializer"></a>

```typescript
import { CreateLambdaRole } from 'arc-cdk'

new CreateLambdaRole(scope: Construct, id: string, config: ICreateLambdaRole)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#arc-cdk.CreateLambdaRole.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The parent construct of this stack. |
| <code><a href="#arc-cdk.CreateLambdaRole.Initializer.parameter.id">id</a></code> | <code>string</code> | The ID of the construct. |
| <code><a href="#arc-cdk.CreateLambdaRole.Initializer.parameter.config">config</a></code> | <code><a href="#arc-cdk.ICreateLambdaRole">ICreateLambdaRole</a></code> | The configuration options for this resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="arc-cdk.CreateLambdaRole.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The parent construct of this stack.

---

##### `id`<sup>Required</sup> <a name="id" id="arc-cdk.CreateLambdaRole.Initializer.parameter.id"></a>

- *Type:* string

The ID of the construct.

---

##### `config`<sup>Required</sup> <a name="config" id="arc-cdk.CreateLambdaRole.Initializer.parameter.config"></a>

- *Type:* <a href="#arc-cdk.ICreateLambdaRole">ICreateLambdaRole</a>

The configuration options for this resource.

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
| <code><a href="#arc-cdk.CreateLambdaRole.property.arn">arn</a></code> | <code>string</code> | The ARN of the created IAM role. |

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

The ARN of the created IAM role.

---


### DbModule <a name="DbModule" id="arc-cdk.DbModule"></a>

#### Initializers <a name="Initializers" id="arc-cdk.DbModule.Initializer"></a>

```typescript
import { DbModule } from 'arc-cdk'

new DbModule(scope: Construct, id: string, config: DbModuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#arc-cdk.DbModule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#arc-cdk.DbModule.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdk.DbModule.Initializer.parameter.config">config</a></code> | <code><a href="#arc-cdk.DbModuleConfig">DbModuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="arc-cdk.DbModule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="arc-cdk.DbModule.Initializer.parameter.id"></a>

- *Type:* string

---

##### `config`<sup>Required</sup> <a name="config" id="arc-cdk.DbModule.Initializer.parameter.config"></a>

- *Type:* <a href="#arc-cdk.DbModuleConfig">DbModuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#arc-cdk.DbModule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#arc-cdk.DbModule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#arc-cdk.DbModule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#arc-cdk.DbModule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#arc-cdk.DbModule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#arc-cdk.DbModule.toTerraform">toTerraform</a></code> | *No description.* |
| <code><a href="#arc-cdk.DbModule.addProvider">addProvider</a></code> | *No description.* |
| <code><a href="#arc-cdk.DbModule.getString">getString</a></code> | *No description.* |
| <code><a href="#arc-cdk.DbModule.interpolationForOutput">interpolationForOutput</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="arc-cdk.DbModule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="arc-cdk.DbModule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="arc-cdk.DbModule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="arc-cdk.DbModule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="arc-cdk.DbModule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="arc-cdk.DbModule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="arc-cdk.DbModule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="arc-cdk.DbModule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="arc-cdk.DbModule.toTerraform"></a>

```typescript
public toTerraform(): any
```

##### `addProvider` <a name="addProvider" id="arc-cdk.DbModule.addProvider"></a>

```typescript
public addProvider(provider: TerraformProvider | TerraformModuleProvider): void
```

###### `provider`<sup>Required</sup> <a name="provider" id="arc-cdk.DbModule.addProvider.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider | cdktf.TerraformModuleProvider

---

##### `getString` <a name="getString" id="arc-cdk.DbModule.getString"></a>

```typescript
public getString(output: string): string
```

###### `output`<sup>Required</sup> <a name="output" id="arc-cdk.DbModule.getString.parameter.output"></a>

- *Type:* string

---

##### `interpolationForOutput` <a name="interpolationForOutput" id="arc-cdk.DbModule.interpolationForOutput"></a>

```typescript
public interpolationForOutput(moduleOutput: string): IResolvable
```

###### `moduleOutput`<sup>Required</sup> <a name="moduleOutput" id="arc-cdk.DbModule.interpolationForOutput.parameter.moduleOutput"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#arc-cdk.DbModule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#arc-cdk.DbModule.isTerraformElement">isTerraformElement</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="arc-cdk.DbModule.isConstruct"></a>

```typescript
import { DbModule } from 'arc-cdk'

DbModule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="arc-cdk.DbModule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="arc-cdk.DbModule.isTerraformElement"></a>

```typescript
import { DbModule } from 'arc-cdk'

DbModule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="arc-cdk.DbModule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#arc-cdk.DbModule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#arc-cdk.DbModule.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#arc-cdk.DbModule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdk.DbModule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdk.DbModule.property.source">source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdk.DbModule.property.providers">providers</a></code> | <code>cdktf.TerraformProvider \| cdktf.TerraformModuleProvider[]</code> | *No description.* |
| <code><a href="#arc-cdk.DbModule.property.skipAssetCreationFromLocalModules">skipAssetCreationFromLocalModules</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#arc-cdk.DbModule.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdk.DbModule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#arc-cdk.DbModule.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#arc-cdk.DbModule.property.auroraArnOutput">auroraArnOutput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdk.DbModule.property.auroraClusterIdentifierOutput">auroraClusterIdentifierOutput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdk.DbModule.property.auroraEndpointOutput">auroraEndpointOutput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdk.DbModule.property.auroraMasterHostOutput">auroraMasterHostOutput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdk.DbModule.property.auroraMasterUsernameOutput">auroraMasterUsernameOutput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdk.DbModule.property.auroraNameOutput">auroraNameOutput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdk.DbModule.property.auroraReaderEndpointOutput">auroraReaderEndpointOutput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdk.DbModule.property.auroraReplicasHostOutput">auroraReplicasHostOutput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdk.DbModule.property.rdsInstanceArnOutput">rdsInstanceArnOutput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdk.DbModule.property.rdsInstanceEndpointOutput">rdsInstanceEndpointOutput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdk.DbModule.property.rdsInstanceHostnameOutput">rdsInstanceHostnameOutput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdk.DbModule.property.rdsInstanceIdOutput">rdsInstanceIdOutput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdk.DbModule.property.rdsInstanceKmsArnOutput">rdsInstanceKmsArnOutput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdk.DbModule.property.rdsInstanceKmsIdOutput">rdsInstanceKmsIdOutput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdk.DbModule.property.rdsInstanceResourceIdOutput">rdsInstanceResourceIdOutput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdk.DbModule.property.auroraScalingConfiguration">auroraScalingConfiguration</a></code> | <code>any</code> | *No description.* |
| <code><a href="#arc-cdk.DbModule.property.auroraServerlessv2ScalingConfiguration">auroraServerlessv2ScalingConfiguration</a></code> | <code>any</code> | *No description.* |
| <code><a href="#arc-cdk.DbModule.property.context">context</a></code> | <code>any</code> | *No description.* |
| <code><a href="#arc-cdk.DbModule.property.descriptorFormats">descriptorFormats</a></code> | <code>any</code> | *No description.* |
| <code><a href="#arc-cdk.DbModule.property.enhancedMonitoringName">enhancedMonitoringName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdk.DbModule.property.environment">environment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdk.DbModule.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdk.DbModule.property.rdsInstanceDbOptions">rdsInstanceDbOptions</a></code> | <code>any</code> | *No description.* |
| <code><a href="#arc-cdk.DbModule.property.rdsInstanceDbParameter">rdsInstanceDbParameter</a></code> | <code>any</code> | *No description.* |
| <code><a href="#arc-cdk.DbModule.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdk.DbModule.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdk.DbModule.property.additionalTagMap">additionalTagMap</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#arc-cdk.DbModule.property.attributes">attributes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#arc-cdk.DbModule.property.auroraAllowedCidrBlocks">auroraAllowedCidrBlocks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#arc-cdk.DbModule.property.auroraAllowMajorVersionUpgrade">auroraAllowMajorVersionUpgrade</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#arc-cdk.DbModule.property.auroraAutoMinorVersionUpgrade">auroraAutoMinorVersionUpgrade</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#arc-cdk.DbModule.property.auroraClusterEnabled">auroraClusterEnabled</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#arc-cdk.DbModule.property.auroraClusterFamily">auroraClusterFamily</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdk.DbModule.property.auroraClusterName">auroraClusterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdk.DbModule.property.auroraClusterSize">auroraClusterSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#arc-cdk.DbModule.property.auroraDbAdminPassword">auroraDbAdminPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdk.DbModule.property.auroraDbAdminUsername">auroraDbAdminUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdk.DbModule.property.auroraDbName">auroraDbName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdk.DbModule.property.auroraEngine">auroraEngine</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdk.DbModule.property.auroraEngineMode">auroraEngineMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdk.DbModule.property.auroraEngineVersion">auroraEngineVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdk.DbModule.property.auroraInstanceType">auroraInstanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdk.DbModule.property.auroraSecurityGroups">auroraSecurityGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#arc-cdk.DbModule.property.auroraSubnets">auroraSubnets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#arc-cdk.DbModule.property.deletionProtection">deletionProtection</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#arc-cdk.DbModule.property.deletionWindowInDays">deletionWindowInDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#arc-cdk.DbModule.property.delimiter">delimiter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdk.DbModule.property.enableCustomOptionGroup">enableCustomOptionGroup</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#arc-cdk.DbModule.property.enabled">enabled</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#arc-cdk.DbModule.property.enableKeyRotation">enableKeyRotation</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#arc-cdk.DbModule.property.enhancedMonitoringArn">enhancedMonitoringArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdk.DbModule.property.idLengthLimit">idLengthLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#arc-cdk.DbModule.property.labelKeyCase">labelKeyCase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdk.DbModule.property.labelOrder">labelOrder</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#arc-cdk.DbModule.property.labelsAsTags">labelsAsTags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#arc-cdk.DbModule.property.labelValueCase">labelValueCase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdk.DbModule.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdk.DbModule.property.rdsInstanceAllocatedStorage">rdsInstanceAllocatedStorage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#arc-cdk.DbModule.property.rdsInstanceAllowedCidrBlocks">rdsInstanceAllowedCidrBlocks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#arc-cdk.DbModule.property.rdsInstanceAllowMajorVersionUpgrade">rdsInstanceAllowMajorVersionUpgrade</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#arc-cdk.DbModule.property.rdsInstanceApplyImmediately">rdsInstanceApplyImmediately</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#arc-cdk.DbModule.property.rdsInstanceAutoMinorVersionUpgrade">rdsInstanceAutoMinorVersionUpgrade</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#arc-cdk.DbModule.property.rdsInstanceBackupRetentionPeriod">rdsInstanceBackupRetentionPeriod</a></code> | <code>number</code> | *No description.* |
| <code><a href="#arc-cdk.DbModule.property.rdsInstanceBackupWindow">rdsInstanceBackupWindow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdk.DbModule.property.rdsInstanceCaCertIdentifier">rdsInstanceCaCertIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdk.DbModule.property.rdsInstanceCopyTagsToSnapshot">rdsInstanceCopyTagsToSnapshot</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#arc-cdk.DbModule.property.rdsInstanceDatabaseName">rdsInstanceDatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdk.DbModule.property.rdsInstanceDatabasePassword">rdsInstanceDatabasePassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdk.DbModule.property.rdsInstanceDatabasePort">rdsInstanceDatabasePort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#arc-cdk.DbModule.property.rdsInstanceDatabaseUser">rdsInstanceDatabaseUser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdk.DbModule.property.rdsInstanceDbParameterGroup">rdsInstanceDbParameterGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdk.DbModule.property.rdsInstanceDnsZoneId">rdsInstanceDnsZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdk.DbModule.property.rdsInstanceEnabled">rdsInstanceEnabled</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#arc-cdk.DbModule.property.rdsInstanceEngine">rdsInstanceEngine</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdk.DbModule.property.rdsInstanceEngineVersion">rdsInstanceEngineVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdk.DbModule.property.rdsInstanceHostName">rdsInstanceHostName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdk.DbModule.property.rdsInstanceInstanceClass">rdsInstanceInstanceClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdk.DbModule.property.rdsInstanceLicenseModel">rdsInstanceLicenseModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdk.DbModule.property.rdsInstanceMaintenanceWindow">rdsInstanceMaintenanceWindow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdk.DbModule.property.rdsInstanceMajorEngineVersion">rdsInstanceMajorEngineVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdk.DbModule.property.rdsInstanceMultiAz">rdsInstanceMultiAz</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#arc-cdk.DbModule.property.rdsInstanceName">rdsInstanceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdk.DbModule.property.rdsInstanceOptionGroupName">rdsInstanceOptionGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdk.DbModule.property.rdsInstancePubliclyAccessible">rdsInstancePubliclyAccessible</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#arc-cdk.DbModule.property.rdsInstanceSecurityGroupIds">rdsInstanceSecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#arc-cdk.DbModule.property.rdsInstanceSkipFinalSnapshot">rdsInstanceSkipFinalSnapshot</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#arc-cdk.DbModule.property.rdsInstanceSnapshotIdentifier">rdsInstanceSnapshotIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdk.DbModule.property.rdsInstanceStorageEncrypted">rdsInstanceStorageEncrypted</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#arc-cdk.DbModule.property.rdsInstanceStorageType">rdsInstanceStorageType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdk.DbModule.property.rdsInstanceSubnetIds">rdsInstanceSubnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#arc-cdk.DbModule.property.rdsKmsKeyArnOverride">rdsKmsKeyArnOverride</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdk.DbModule.property.rdsKmsKeyIdOverride">rdsKmsKeyIdOverride</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdk.DbModule.property.regexReplaceChars">regexReplaceChars</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdk.DbModule.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdk.DbModule.property.s3KmsAliasOverride">s3KmsAliasOverride</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdk.DbModule.property.stage">stage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdk.DbModule.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#arc-cdk.DbModule.property.tenant">tenant</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="arc-cdk.DbModule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="arc-cdk.DbModule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="arc-cdk.DbModule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="arc-cdk.DbModule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `source`<sup>Required</sup> <a name="source" id="arc-cdk.DbModule.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

---

##### `providers`<sup>Optional</sup> <a name="providers" id="arc-cdk.DbModule.property.providers"></a>

```typescript
public readonly providers: TerraformProvider | TerraformModuleProvider[];
```

- *Type:* cdktf.TerraformProvider | cdktf.TerraformModuleProvider[]

---

##### `skipAssetCreationFromLocalModules`<sup>Optional</sup> <a name="skipAssetCreationFromLocalModules" id="arc-cdk.DbModule.property.skipAssetCreationFromLocalModules"></a>

```typescript
public readonly skipAssetCreationFromLocalModules: boolean;
```

- *Type:* boolean

---

##### `version`<sup>Optional</sup> <a name="version" id="arc-cdk.DbModule.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="arc-cdk.DbModule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="arc-cdk.DbModule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `auroraArnOutput`<sup>Required</sup> <a name="auroraArnOutput" id="arc-cdk.DbModule.property.auroraArnOutput"></a>

```typescript
public readonly auroraArnOutput: string;
```

- *Type:* string

---

##### `auroraClusterIdentifierOutput`<sup>Required</sup> <a name="auroraClusterIdentifierOutput" id="arc-cdk.DbModule.property.auroraClusterIdentifierOutput"></a>

```typescript
public readonly auroraClusterIdentifierOutput: string;
```

- *Type:* string

---

##### `auroraEndpointOutput`<sup>Required</sup> <a name="auroraEndpointOutput" id="arc-cdk.DbModule.property.auroraEndpointOutput"></a>

```typescript
public readonly auroraEndpointOutput: string;
```

- *Type:* string

---

##### `auroraMasterHostOutput`<sup>Required</sup> <a name="auroraMasterHostOutput" id="arc-cdk.DbModule.property.auroraMasterHostOutput"></a>

```typescript
public readonly auroraMasterHostOutput: string;
```

- *Type:* string

---

##### `auroraMasterUsernameOutput`<sup>Required</sup> <a name="auroraMasterUsernameOutput" id="arc-cdk.DbModule.property.auroraMasterUsernameOutput"></a>

```typescript
public readonly auroraMasterUsernameOutput: string;
```

- *Type:* string

---

##### `auroraNameOutput`<sup>Required</sup> <a name="auroraNameOutput" id="arc-cdk.DbModule.property.auroraNameOutput"></a>

```typescript
public readonly auroraNameOutput: string;
```

- *Type:* string

---

##### `auroraReaderEndpointOutput`<sup>Required</sup> <a name="auroraReaderEndpointOutput" id="arc-cdk.DbModule.property.auroraReaderEndpointOutput"></a>

```typescript
public readonly auroraReaderEndpointOutput: string;
```

- *Type:* string

---

##### `auroraReplicasHostOutput`<sup>Required</sup> <a name="auroraReplicasHostOutput" id="arc-cdk.DbModule.property.auroraReplicasHostOutput"></a>

```typescript
public readonly auroraReplicasHostOutput: string;
```

- *Type:* string

---

##### `rdsInstanceArnOutput`<sup>Required</sup> <a name="rdsInstanceArnOutput" id="arc-cdk.DbModule.property.rdsInstanceArnOutput"></a>

```typescript
public readonly rdsInstanceArnOutput: string;
```

- *Type:* string

---

##### `rdsInstanceEndpointOutput`<sup>Required</sup> <a name="rdsInstanceEndpointOutput" id="arc-cdk.DbModule.property.rdsInstanceEndpointOutput"></a>

```typescript
public readonly rdsInstanceEndpointOutput: string;
```

- *Type:* string

---

##### `rdsInstanceHostnameOutput`<sup>Required</sup> <a name="rdsInstanceHostnameOutput" id="arc-cdk.DbModule.property.rdsInstanceHostnameOutput"></a>

```typescript
public readonly rdsInstanceHostnameOutput: string;
```

- *Type:* string

---

##### `rdsInstanceIdOutput`<sup>Required</sup> <a name="rdsInstanceIdOutput" id="arc-cdk.DbModule.property.rdsInstanceIdOutput"></a>

```typescript
public readonly rdsInstanceIdOutput: string;
```

- *Type:* string

---

##### `rdsInstanceKmsArnOutput`<sup>Required</sup> <a name="rdsInstanceKmsArnOutput" id="arc-cdk.DbModule.property.rdsInstanceKmsArnOutput"></a>

```typescript
public readonly rdsInstanceKmsArnOutput: string;
```

- *Type:* string

---

##### `rdsInstanceKmsIdOutput`<sup>Required</sup> <a name="rdsInstanceKmsIdOutput" id="arc-cdk.DbModule.property.rdsInstanceKmsIdOutput"></a>

```typescript
public readonly rdsInstanceKmsIdOutput: string;
```

- *Type:* string

---

##### `rdsInstanceResourceIdOutput`<sup>Required</sup> <a name="rdsInstanceResourceIdOutput" id="arc-cdk.DbModule.property.rdsInstanceResourceIdOutput"></a>

```typescript
public readonly rdsInstanceResourceIdOutput: string;
```

- *Type:* string

---

##### `auroraScalingConfiguration`<sup>Required</sup> <a name="auroraScalingConfiguration" id="arc-cdk.DbModule.property.auroraScalingConfiguration"></a>

```typescript
public readonly auroraScalingConfiguration: any;
```

- *Type:* any

---

##### `auroraServerlessv2ScalingConfiguration`<sup>Required</sup> <a name="auroraServerlessv2ScalingConfiguration" id="arc-cdk.DbModule.property.auroraServerlessv2ScalingConfiguration"></a>

```typescript
public readonly auroraServerlessv2ScalingConfiguration: any;
```

- *Type:* any

---

##### `context`<sup>Required</sup> <a name="context" id="arc-cdk.DbModule.property.context"></a>

```typescript
public readonly context: any;
```

- *Type:* any

---

##### `descriptorFormats`<sup>Required</sup> <a name="descriptorFormats" id="arc-cdk.DbModule.property.descriptorFormats"></a>

```typescript
public readonly descriptorFormats: any;
```

- *Type:* any

---

##### `enhancedMonitoringName`<sup>Required</sup> <a name="enhancedMonitoringName" id="arc-cdk.DbModule.property.enhancedMonitoringName"></a>

```typescript
public readonly enhancedMonitoringName: string;
```

- *Type:* string

---

##### `environment`<sup>Required</sup> <a name="environment" id="arc-cdk.DbModule.property.environment"></a>

```typescript
public readonly environment: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="arc-cdk.DbModule.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `rdsInstanceDbOptions`<sup>Required</sup> <a name="rdsInstanceDbOptions" id="arc-cdk.DbModule.property.rdsInstanceDbOptions"></a>

```typescript
public readonly rdsInstanceDbOptions: any;
```

- *Type:* any

---

##### `rdsInstanceDbParameter`<sup>Required</sup> <a name="rdsInstanceDbParameter" id="arc-cdk.DbModule.property.rdsInstanceDbParameter"></a>

```typescript
public readonly rdsInstanceDbParameter: any;
```

- *Type:* any

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="arc-cdk.DbModule.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="arc-cdk.DbModule.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `additionalTagMap`<sup>Optional</sup> <a name="additionalTagMap" id="arc-cdk.DbModule.property.additionalTagMap"></a>

```typescript
public readonly additionalTagMap: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="arc-cdk.DbModule.property.attributes"></a>

```typescript
public readonly attributes: string[];
```

- *Type:* string[]

---

##### `auroraAllowedCidrBlocks`<sup>Optional</sup> <a name="auroraAllowedCidrBlocks" id="arc-cdk.DbModule.property.auroraAllowedCidrBlocks"></a>

```typescript
public readonly auroraAllowedCidrBlocks: string[];
```

- *Type:* string[]

---

##### `auroraAllowMajorVersionUpgrade`<sup>Optional</sup> <a name="auroraAllowMajorVersionUpgrade" id="arc-cdk.DbModule.property.auroraAllowMajorVersionUpgrade"></a>

```typescript
public readonly auroraAllowMajorVersionUpgrade: boolean;
```

- *Type:* boolean

---

##### `auroraAutoMinorVersionUpgrade`<sup>Optional</sup> <a name="auroraAutoMinorVersionUpgrade" id="arc-cdk.DbModule.property.auroraAutoMinorVersionUpgrade"></a>

```typescript
public readonly auroraAutoMinorVersionUpgrade: boolean;
```

- *Type:* boolean

---

##### `auroraClusterEnabled`<sup>Optional</sup> <a name="auroraClusterEnabled" id="arc-cdk.DbModule.property.auroraClusterEnabled"></a>

```typescript
public readonly auroraClusterEnabled: boolean;
```

- *Type:* boolean

---

##### `auroraClusterFamily`<sup>Optional</sup> <a name="auroraClusterFamily" id="arc-cdk.DbModule.property.auroraClusterFamily"></a>

```typescript
public readonly auroraClusterFamily: string;
```

- *Type:* string

---

##### `auroraClusterName`<sup>Optional</sup> <a name="auroraClusterName" id="arc-cdk.DbModule.property.auroraClusterName"></a>

```typescript
public readonly auroraClusterName: string;
```

- *Type:* string

---

##### `auroraClusterSize`<sup>Optional</sup> <a name="auroraClusterSize" id="arc-cdk.DbModule.property.auroraClusterSize"></a>

```typescript
public readonly auroraClusterSize: number;
```

- *Type:* number

---

##### `auroraDbAdminPassword`<sup>Optional</sup> <a name="auroraDbAdminPassword" id="arc-cdk.DbModule.property.auroraDbAdminPassword"></a>

```typescript
public readonly auroraDbAdminPassword: string;
```

- *Type:* string

---

##### `auroraDbAdminUsername`<sup>Optional</sup> <a name="auroraDbAdminUsername" id="arc-cdk.DbModule.property.auroraDbAdminUsername"></a>

```typescript
public readonly auroraDbAdminUsername: string;
```

- *Type:* string

---

##### `auroraDbName`<sup>Optional</sup> <a name="auroraDbName" id="arc-cdk.DbModule.property.auroraDbName"></a>

```typescript
public readonly auroraDbName: string;
```

- *Type:* string

---

##### `auroraEngine`<sup>Optional</sup> <a name="auroraEngine" id="arc-cdk.DbModule.property.auroraEngine"></a>

```typescript
public readonly auroraEngine: string;
```

- *Type:* string

---

##### `auroraEngineMode`<sup>Optional</sup> <a name="auroraEngineMode" id="arc-cdk.DbModule.property.auroraEngineMode"></a>

```typescript
public readonly auroraEngineMode: string;
```

- *Type:* string

---

##### `auroraEngineVersion`<sup>Optional</sup> <a name="auroraEngineVersion" id="arc-cdk.DbModule.property.auroraEngineVersion"></a>

```typescript
public readonly auroraEngineVersion: string;
```

- *Type:* string

---

##### `auroraInstanceType`<sup>Optional</sup> <a name="auroraInstanceType" id="arc-cdk.DbModule.property.auroraInstanceType"></a>

```typescript
public readonly auroraInstanceType: string;
```

- *Type:* string

---

##### `auroraSecurityGroups`<sup>Optional</sup> <a name="auroraSecurityGroups" id="arc-cdk.DbModule.property.auroraSecurityGroups"></a>

```typescript
public readonly auroraSecurityGroups: string[];
```

- *Type:* string[]

---

##### `auroraSubnets`<sup>Optional</sup> <a name="auroraSubnets" id="arc-cdk.DbModule.property.auroraSubnets"></a>

```typescript
public readonly auroraSubnets: string[];
```

- *Type:* string[]

---

##### `deletionProtection`<sup>Optional</sup> <a name="deletionProtection" id="arc-cdk.DbModule.property.deletionProtection"></a>

```typescript
public readonly deletionProtection: boolean;
```

- *Type:* boolean

---

##### `deletionWindowInDays`<sup>Optional</sup> <a name="deletionWindowInDays" id="arc-cdk.DbModule.property.deletionWindowInDays"></a>

```typescript
public readonly deletionWindowInDays: number;
```

- *Type:* number

---

##### `delimiter`<sup>Optional</sup> <a name="delimiter" id="arc-cdk.DbModule.property.delimiter"></a>

```typescript
public readonly delimiter: string;
```

- *Type:* string

---

##### `enableCustomOptionGroup`<sup>Optional</sup> <a name="enableCustomOptionGroup" id="arc-cdk.DbModule.property.enableCustomOptionGroup"></a>

```typescript
public readonly enableCustomOptionGroup: boolean;
```

- *Type:* boolean

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="arc-cdk.DbModule.property.enabled"></a>

```typescript
public readonly enabled: boolean;
```

- *Type:* boolean

---

##### `enableKeyRotation`<sup>Optional</sup> <a name="enableKeyRotation" id="arc-cdk.DbModule.property.enableKeyRotation"></a>

```typescript
public readonly enableKeyRotation: boolean;
```

- *Type:* boolean

---

##### `enhancedMonitoringArn`<sup>Optional</sup> <a name="enhancedMonitoringArn" id="arc-cdk.DbModule.property.enhancedMonitoringArn"></a>

```typescript
public readonly enhancedMonitoringArn: string;
```

- *Type:* string

---

##### `idLengthLimit`<sup>Optional</sup> <a name="idLengthLimit" id="arc-cdk.DbModule.property.idLengthLimit"></a>

```typescript
public readonly idLengthLimit: number;
```

- *Type:* number

---

##### `labelKeyCase`<sup>Optional</sup> <a name="labelKeyCase" id="arc-cdk.DbModule.property.labelKeyCase"></a>

```typescript
public readonly labelKeyCase: string;
```

- *Type:* string

---

##### `labelOrder`<sup>Optional</sup> <a name="labelOrder" id="arc-cdk.DbModule.property.labelOrder"></a>

```typescript
public readonly labelOrder: string[];
```

- *Type:* string[]

---

##### `labelsAsTags`<sup>Optional</sup> <a name="labelsAsTags" id="arc-cdk.DbModule.property.labelsAsTags"></a>

```typescript
public readonly labelsAsTags: string[];
```

- *Type:* string[]

---

##### `labelValueCase`<sup>Optional</sup> <a name="labelValueCase" id="arc-cdk.DbModule.property.labelValueCase"></a>

```typescript
public readonly labelValueCase: string;
```

- *Type:* string

---

##### `name`<sup>Optional</sup> <a name="name" id="arc-cdk.DbModule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `rdsInstanceAllocatedStorage`<sup>Optional</sup> <a name="rdsInstanceAllocatedStorage" id="arc-cdk.DbModule.property.rdsInstanceAllocatedStorage"></a>

```typescript
public readonly rdsInstanceAllocatedStorage: number;
```

- *Type:* number

---

##### `rdsInstanceAllowedCidrBlocks`<sup>Optional</sup> <a name="rdsInstanceAllowedCidrBlocks" id="arc-cdk.DbModule.property.rdsInstanceAllowedCidrBlocks"></a>

```typescript
public readonly rdsInstanceAllowedCidrBlocks: string[];
```

- *Type:* string[]

---

##### `rdsInstanceAllowMajorVersionUpgrade`<sup>Optional</sup> <a name="rdsInstanceAllowMajorVersionUpgrade" id="arc-cdk.DbModule.property.rdsInstanceAllowMajorVersionUpgrade"></a>

```typescript
public readonly rdsInstanceAllowMajorVersionUpgrade: boolean;
```

- *Type:* boolean

---

##### `rdsInstanceApplyImmediately`<sup>Optional</sup> <a name="rdsInstanceApplyImmediately" id="arc-cdk.DbModule.property.rdsInstanceApplyImmediately"></a>

```typescript
public readonly rdsInstanceApplyImmediately: boolean;
```

- *Type:* boolean

---

##### `rdsInstanceAutoMinorVersionUpgrade`<sup>Optional</sup> <a name="rdsInstanceAutoMinorVersionUpgrade" id="arc-cdk.DbModule.property.rdsInstanceAutoMinorVersionUpgrade"></a>

```typescript
public readonly rdsInstanceAutoMinorVersionUpgrade: boolean;
```

- *Type:* boolean

---

##### `rdsInstanceBackupRetentionPeriod`<sup>Optional</sup> <a name="rdsInstanceBackupRetentionPeriod" id="arc-cdk.DbModule.property.rdsInstanceBackupRetentionPeriod"></a>

```typescript
public readonly rdsInstanceBackupRetentionPeriod: number;
```

- *Type:* number

---

##### `rdsInstanceBackupWindow`<sup>Optional</sup> <a name="rdsInstanceBackupWindow" id="arc-cdk.DbModule.property.rdsInstanceBackupWindow"></a>

```typescript
public readonly rdsInstanceBackupWindow: string;
```

- *Type:* string

---

##### `rdsInstanceCaCertIdentifier`<sup>Optional</sup> <a name="rdsInstanceCaCertIdentifier" id="arc-cdk.DbModule.property.rdsInstanceCaCertIdentifier"></a>

```typescript
public readonly rdsInstanceCaCertIdentifier: string;
```

- *Type:* string

---

##### `rdsInstanceCopyTagsToSnapshot`<sup>Optional</sup> <a name="rdsInstanceCopyTagsToSnapshot" id="arc-cdk.DbModule.property.rdsInstanceCopyTagsToSnapshot"></a>

```typescript
public readonly rdsInstanceCopyTagsToSnapshot: boolean;
```

- *Type:* boolean

---

##### `rdsInstanceDatabaseName`<sup>Optional</sup> <a name="rdsInstanceDatabaseName" id="arc-cdk.DbModule.property.rdsInstanceDatabaseName"></a>

```typescript
public readonly rdsInstanceDatabaseName: string;
```

- *Type:* string

---

##### `rdsInstanceDatabasePassword`<sup>Optional</sup> <a name="rdsInstanceDatabasePassword" id="arc-cdk.DbModule.property.rdsInstanceDatabasePassword"></a>

```typescript
public readonly rdsInstanceDatabasePassword: string;
```

- *Type:* string

---

##### `rdsInstanceDatabasePort`<sup>Optional</sup> <a name="rdsInstanceDatabasePort" id="arc-cdk.DbModule.property.rdsInstanceDatabasePort"></a>

```typescript
public readonly rdsInstanceDatabasePort: number;
```

- *Type:* number

---

##### `rdsInstanceDatabaseUser`<sup>Optional</sup> <a name="rdsInstanceDatabaseUser" id="arc-cdk.DbModule.property.rdsInstanceDatabaseUser"></a>

```typescript
public readonly rdsInstanceDatabaseUser: string;
```

- *Type:* string

---

##### `rdsInstanceDbParameterGroup`<sup>Optional</sup> <a name="rdsInstanceDbParameterGroup" id="arc-cdk.DbModule.property.rdsInstanceDbParameterGroup"></a>

```typescript
public readonly rdsInstanceDbParameterGroup: string;
```

- *Type:* string

---

##### `rdsInstanceDnsZoneId`<sup>Optional</sup> <a name="rdsInstanceDnsZoneId" id="arc-cdk.DbModule.property.rdsInstanceDnsZoneId"></a>

```typescript
public readonly rdsInstanceDnsZoneId: string;
```

- *Type:* string

---

##### `rdsInstanceEnabled`<sup>Optional</sup> <a name="rdsInstanceEnabled" id="arc-cdk.DbModule.property.rdsInstanceEnabled"></a>

```typescript
public readonly rdsInstanceEnabled: boolean;
```

- *Type:* boolean

---

##### `rdsInstanceEngine`<sup>Optional</sup> <a name="rdsInstanceEngine" id="arc-cdk.DbModule.property.rdsInstanceEngine"></a>

```typescript
public readonly rdsInstanceEngine: string;
```

- *Type:* string

---

##### `rdsInstanceEngineVersion`<sup>Optional</sup> <a name="rdsInstanceEngineVersion" id="arc-cdk.DbModule.property.rdsInstanceEngineVersion"></a>

```typescript
public readonly rdsInstanceEngineVersion: string;
```

- *Type:* string

---

##### `rdsInstanceHostName`<sup>Optional</sup> <a name="rdsInstanceHostName" id="arc-cdk.DbModule.property.rdsInstanceHostName"></a>

```typescript
public readonly rdsInstanceHostName: string;
```

- *Type:* string

---

##### `rdsInstanceInstanceClass`<sup>Optional</sup> <a name="rdsInstanceInstanceClass" id="arc-cdk.DbModule.property.rdsInstanceInstanceClass"></a>

```typescript
public readonly rdsInstanceInstanceClass: string;
```

- *Type:* string

---

##### `rdsInstanceLicenseModel`<sup>Optional</sup> <a name="rdsInstanceLicenseModel" id="arc-cdk.DbModule.property.rdsInstanceLicenseModel"></a>

```typescript
public readonly rdsInstanceLicenseModel: string;
```

- *Type:* string

---

##### `rdsInstanceMaintenanceWindow`<sup>Optional</sup> <a name="rdsInstanceMaintenanceWindow" id="arc-cdk.DbModule.property.rdsInstanceMaintenanceWindow"></a>

```typescript
public readonly rdsInstanceMaintenanceWindow: string;
```

- *Type:* string

---

##### `rdsInstanceMajorEngineVersion`<sup>Optional</sup> <a name="rdsInstanceMajorEngineVersion" id="arc-cdk.DbModule.property.rdsInstanceMajorEngineVersion"></a>

```typescript
public readonly rdsInstanceMajorEngineVersion: string;
```

- *Type:* string

---

##### `rdsInstanceMultiAz`<sup>Optional</sup> <a name="rdsInstanceMultiAz" id="arc-cdk.DbModule.property.rdsInstanceMultiAz"></a>

```typescript
public readonly rdsInstanceMultiAz: boolean;
```

- *Type:* boolean

---

##### `rdsInstanceName`<sup>Optional</sup> <a name="rdsInstanceName" id="arc-cdk.DbModule.property.rdsInstanceName"></a>

```typescript
public readonly rdsInstanceName: string;
```

- *Type:* string

---

##### `rdsInstanceOptionGroupName`<sup>Optional</sup> <a name="rdsInstanceOptionGroupName" id="arc-cdk.DbModule.property.rdsInstanceOptionGroupName"></a>

```typescript
public readonly rdsInstanceOptionGroupName: string;
```

- *Type:* string

---

##### `rdsInstancePubliclyAccessible`<sup>Optional</sup> <a name="rdsInstancePubliclyAccessible" id="arc-cdk.DbModule.property.rdsInstancePubliclyAccessible"></a>

```typescript
public readonly rdsInstancePubliclyAccessible: boolean;
```

- *Type:* boolean

---

##### `rdsInstanceSecurityGroupIds`<sup>Optional</sup> <a name="rdsInstanceSecurityGroupIds" id="arc-cdk.DbModule.property.rdsInstanceSecurityGroupIds"></a>

```typescript
public readonly rdsInstanceSecurityGroupIds: string[];
```

- *Type:* string[]

---

##### `rdsInstanceSkipFinalSnapshot`<sup>Optional</sup> <a name="rdsInstanceSkipFinalSnapshot" id="arc-cdk.DbModule.property.rdsInstanceSkipFinalSnapshot"></a>

```typescript
public readonly rdsInstanceSkipFinalSnapshot: boolean;
```

- *Type:* boolean

---

##### `rdsInstanceSnapshotIdentifier`<sup>Optional</sup> <a name="rdsInstanceSnapshotIdentifier" id="arc-cdk.DbModule.property.rdsInstanceSnapshotIdentifier"></a>

```typescript
public readonly rdsInstanceSnapshotIdentifier: string;
```

- *Type:* string

---

##### `rdsInstanceStorageEncrypted`<sup>Optional</sup> <a name="rdsInstanceStorageEncrypted" id="arc-cdk.DbModule.property.rdsInstanceStorageEncrypted"></a>

```typescript
public readonly rdsInstanceStorageEncrypted: boolean;
```

- *Type:* boolean

---

##### `rdsInstanceStorageType`<sup>Optional</sup> <a name="rdsInstanceStorageType" id="arc-cdk.DbModule.property.rdsInstanceStorageType"></a>

```typescript
public readonly rdsInstanceStorageType: string;
```

- *Type:* string

---

##### `rdsInstanceSubnetIds`<sup>Optional</sup> <a name="rdsInstanceSubnetIds" id="arc-cdk.DbModule.property.rdsInstanceSubnetIds"></a>

```typescript
public readonly rdsInstanceSubnetIds: string[];
```

- *Type:* string[]

---

##### `rdsKmsKeyArnOverride`<sup>Optional</sup> <a name="rdsKmsKeyArnOverride" id="arc-cdk.DbModule.property.rdsKmsKeyArnOverride"></a>

```typescript
public readonly rdsKmsKeyArnOverride: string;
```

- *Type:* string

---

##### `rdsKmsKeyIdOverride`<sup>Optional</sup> <a name="rdsKmsKeyIdOverride" id="arc-cdk.DbModule.property.rdsKmsKeyIdOverride"></a>

```typescript
public readonly rdsKmsKeyIdOverride: string;
```

- *Type:* string

---

##### `regexReplaceChars`<sup>Optional</sup> <a name="regexReplaceChars" id="arc-cdk.DbModule.property.regexReplaceChars"></a>

```typescript
public readonly regexReplaceChars: string;
```

- *Type:* string

---

##### `region`<sup>Optional</sup> <a name="region" id="arc-cdk.DbModule.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `s3KmsAliasOverride`<sup>Optional</sup> <a name="s3KmsAliasOverride" id="arc-cdk.DbModule.property.s3KmsAliasOverride"></a>

```typescript
public readonly s3KmsAliasOverride: string;
```

- *Type:* string

---

##### `stage`<sup>Optional</sup> <a name="stage" id="arc-cdk.DbModule.property.stage"></a>

```typescript
public readonly stage: string;
```

- *Type:* string

---

##### `tags`<sup>Optional</sup> <a name="tags" id="arc-cdk.DbModule.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tenant`<sup>Optional</sup> <a name="tenant" id="arc-cdk.DbModule.property.tenant"></a>

```typescript
public readonly tenant: string;
```

- *Type:* string

---


### ElastiCache <a name="ElastiCache" id="arc-cdk.ElastiCache"></a>

#### Initializers <a name="Initializers" id="arc-cdk.ElastiCache.Initializer"></a>

```typescript
import { ElastiCache } from 'arc-cdk'

new ElastiCache(scope: Construct, id: string, config: ElastiCacheConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#arc-cdk.ElastiCache.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#arc-cdk.ElastiCache.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdk.ElastiCache.Initializer.parameter.config">config</a></code> | <code><a href="#arc-cdk.ElastiCacheConfig">ElastiCacheConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="arc-cdk.ElastiCache.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="arc-cdk.ElastiCache.Initializer.parameter.id"></a>

- *Type:* string

---

##### `config`<sup>Required</sup> <a name="config" id="arc-cdk.ElastiCache.Initializer.parameter.config"></a>

- *Type:* <a href="#arc-cdk.ElastiCacheConfig">ElastiCacheConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#arc-cdk.ElastiCache.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#arc-cdk.ElastiCache.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#arc-cdk.ElastiCache.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#arc-cdk.ElastiCache.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#arc-cdk.ElastiCache.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#arc-cdk.ElastiCache.toTerraform">toTerraform</a></code> | *No description.* |
| <code><a href="#arc-cdk.ElastiCache.addProvider">addProvider</a></code> | *No description.* |
| <code><a href="#arc-cdk.ElastiCache.getString">getString</a></code> | *No description.* |
| <code><a href="#arc-cdk.ElastiCache.interpolationForOutput">interpolationForOutput</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="arc-cdk.ElastiCache.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="arc-cdk.ElastiCache.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="arc-cdk.ElastiCache.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="arc-cdk.ElastiCache.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="arc-cdk.ElastiCache.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="arc-cdk.ElastiCache.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="arc-cdk.ElastiCache.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="arc-cdk.ElastiCache.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="arc-cdk.ElastiCache.toTerraform"></a>

```typescript
public toTerraform(): any
```

##### `addProvider` <a name="addProvider" id="arc-cdk.ElastiCache.addProvider"></a>

```typescript
public addProvider(provider: TerraformProvider | TerraformModuleProvider): void
```

###### `provider`<sup>Required</sup> <a name="provider" id="arc-cdk.ElastiCache.addProvider.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider | cdktf.TerraformModuleProvider

---

##### `getString` <a name="getString" id="arc-cdk.ElastiCache.getString"></a>

```typescript
public getString(output: string): string
```

###### `output`<sup>Required</sup> <a name="output" id="arc-cdk.ElastiCache.getString.parameter.output"></a>

- *Type:* string

---

##### `interpolationForOutput` <a name="interpolationForOutput" id="arc-cdk.ElastiCache.interpolationForOutput"></a>

```typescript
public interpolationForOutput(moduleOutput: string): IResolvable
```

###### `moduleOutput`<sup>Required</sup> <a name="moduleOutput" id="arc-cdk.ElastiCache.interpolationForOutput.parameter.moduleOutput"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#arc-cdk.ElastiCache.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#arc-cdk.ElastiCache.isTerraformElement">isTerraformElement</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="arc-cdk.ElastiCache.isConstruct"></a>

```typescript
import { ElastiCache } from 'arc-cdk'

ElastiCache.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="arc-cdk.ElastiCache.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="arc-cdk.ElastiCache.isTerraformElement"></a>

```typescript
import { ElastiCache } from 'arc-cdk'

ElastiCache.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="arc-cdk.ElastiCache.isTerraformElement.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#arc-cdk.ElastiCache.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#arc-cdk.ElastiCache.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#arc-cdk.ElastiCache.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdk.ElastiCache.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdk.ElastiCache.property.source">source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdk.ElastiCache.property.providers">providers</a></code> | <code>cdktf.TerraformProvider \| cdktf.TerraformModuleProvider[]</code> | *No description.* |
| <code><a href="#arc-cdk.ElastiCache.property.skipAssetCreationFromLocalModules">skipAssetCreationFromLocalModules</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#arc-cdk.ElastiCache.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdk.ElastiCache.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#arc-cdk.ElastiCache.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#arc-cdk.ElastiCache.property.arnOutput">arnOutput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdk.ElastiCache.property.clusterEnabledOutput">clusterEnabledOutput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdk.ElastiCache.property.endpointOutput">endpointOutput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdk.ElastiCache.property.engineVersionActualOutput">engineVersionActualOutput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdk.ElastiCache.property.hostOutput">hostOutput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdk.ElastiCache.property.idOutput">idOutput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdk.ElastiCache.property.memberClustersOutput">memberClustersOutput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdk.ElastiCache.property.portOutput">portOutput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdk.ElastiCache.property.readerEndpointAddressOutput">readerEndpointAddressOutput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdk.ElastiCache.property.securityGroupIdOutput">securityGroupIdOutput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdk.ElastiCache.property.securityGroupNameOutput">securityGroupNameOutput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdk.ElastiCache.property.context">context</a></code> | <code>any</code> | *No description.* |
| <code><a href="#arc-cdk.ElastiCache.property.descriptorFormats">descriptorFormats</a></code> | <code>any</code> | *No description.* |
| <code><a href="#arc-cdk.ElastiCache.property.parameter">parameter</a></code> | <code>any</code> | *No description.* |
| <code><a href="#arc-cdk.ElastiCache.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdk.ElastiCache.property.zoneId">zoneId</a></code> | <code>any</code> | *No description.* |
| <code><a href="#arc-cdk.ElastiCache.property.additionalSecurityGroupRules">additionalSecurityGroupRules</a></code> | <code>any[]</code> | *No description.* |
| <code><a href="#arc-cdk.ElastiCache.property.additionalTagMap">additionalTagMap</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#arc-cdk.ElastiCache.property.alarmActions">alarmActions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#arc-cdk.ElastiCache.property.alarmCpuThresholdPercent">alarmCpuThresholdPercent</a></code> | <code>number</code> | *No description.* |
| <code><a href="#arc-cdk.ElastiCache.property.alarmMemoryThresholdBytes">alarmMemoryThresholdBytes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#arc-cdk.ElastiCache.property.allowAllEgress">allowAllEgress</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#arc-cdk.ElastiCache.property.allowedCidrBlocks">allowedCidrBlocks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#arc-cdk.ElastiCache.property.allowedSecurityGroupIds">allowedSecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#arc-cdk.ElastiCache.property.allowedSecurityGroups">allowedSecurityGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#arc-cdk.ElastiCache.property.applyImmediately">applyImmediately</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#arc-cdk.ElastiCache.property.associatedSecurityGroupIds">associatedSecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#arc-cdk.ElastiCache.property.atRestEncryptionEnabled">atRestEncryptionEnabled</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#arc-cdk.ElastiCache.property.attributes">attributes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#arc-cdk.ElastiCache.property.authToken">authToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdk.ElastiCache.property.automaticFailoverEnabled">automaticFailoverEnabled</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#arc-cdk.ElastiCache.property.autoMinorVersionUpgrade">autoMinorVersionUpgrade</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#arc-cdk.ElastiCache.property.availabilityZones">availabilityZones</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#arc-cdk.ElastiCache.property.cloudwatchMetricAlarmsEnabled">cloudwatchMetricAlarmsEnabled</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#arc-cdk.ElastiCache.property.clusterModeEnabled">clusterModeEnabled</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#arc-cdk.ElastiCache.property.clusterModeNumNodeGroups">clusterModeNumNodeGroups</a></code> | <code>number</code> | *No description.* |
| <code><a href="#arc-cdk.ElastiCache.property.clusterModeReplicasPerNodeGroup">clusterModeReplicasPerNodeGroup</a></code> | <code>number</code> | *No description.* |
| <code><a href="#arc-cdk.ElastiCache.property.clusterSize">clusterSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#arc-cdk.ElastiCache.property.createSecurityGroup">createSecurityGroup</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#arc-cdk.ElastiCache.property.dataTieringEnabled">dataTieringEnabled</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#arc-cdk.ElastiCache.property.delimiter">delimiter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdk.ElastiCache.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdk.ElastiCache.property.dnsSubdomain">dnsSubdomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdk.ElastiCache.property.egressCidrBlocks">egressCidrBlocks</a></code> | <code>any[]</code> | *No description.* |
| <code><a href="#arc-cdk.ElastiCache.property.elasticacheSubnetGroupName">elasticacheSubnetGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdk.ElastiCache.property.enabled">enabled</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#arc-cdk.ElastiCache.property.engineVersion">engineVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdk.ElastiCache.property.environment">environment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdk.ElastiCache.property.existingSecurityGroups">existingSecurityGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#arc-cdk.ElastiCache.property.family">family</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdk.ElastiCache.property.finalSnapshotIdentifier">finalSnapshotIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdk.ElastiCache.property.idLengthLimit">idLengthLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#arc-cdk.ElastiCache.property.instanceType">instanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdk.ElastiCache.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdk.ElastiCache.property.labelKeyCase">labelKeyCase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdk.ElastiCache.property.labelOrder">labelOrder</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#arc-cdk.ElastiCache.property.labelsAsTags">labelsAsTags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#arc-cdk.ElastiCache.property.labelValueCase">labelValueCase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdk.ElastiCache.property.logDeliveryConfiguration">logDeliveryConfiguration</a></code> | <code>{[ key: string ]: any}[]</code> | *No description.* |
| <code><a href="#arc-cdk.ElastiCache.property.maintenanceWindow">maintenanceWindow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdk.ElastiCache.property.multiAzEnabled">multiAzEnabled</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#arc-cdk.ElastiCache.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdk.ElastiCache.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdk.ElastiCache.property.notificationTopicArn">notificationTopicArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdk.ElastiCache.property.okActions">okActions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#arc-cdk.ElastiCache.property.parameterGroupDescription">parameterGroupDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdk.ElastiCache.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#arc-cdk.ElastiCache.property.regexReplaceChars">regexReplaceChars</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdk.ElastiCache.property.replicationGroupId">replicationGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdk.ElastiCache.property.securityGroupCreateBeforeDestroy">securityGroupCreateBeforeDestroy</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#arc-cdk.ElastiCache.property.securityGroupCreateTimeout">securityGroupCreateTimeout</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdk.ElastiCache.property.securityGroupDeleteTimeout">securityGroupDeleteTimeout</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdk.ElastiCache.property.securityGroupDescription">securityGroupDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdk.ElastiCache.property.securityGroupName">securityGroupName</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#arc-cdk.ElastiCache.property.snapshotArns">snapshotArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#arc-cdk.ElastiCache.property.snapshotName">snapshotName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdk.ElastiCache.property.snapshotRetentionLimit">snapshotRetentionLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#arc-cdk.ElastiCache.property.snapshotWindow">snapshotWindow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdk.ElastiCache.property.stage">stage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdk.ElastiCache.property.subnets">subnets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#arc-cdk.ElastiCache.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#arc-cdk.ElastiCache.property.tenant">tenant</a></code> | <code>string</code> | *No description.* |
| <code><a href="#arc-cdk.ElastiCache.property.transitEncryptionEnabled">transitEncryptionEnabled</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#arc-cdk.ElastiCache.property.useExistingSecurityGroups">useExistingSecurityGroups</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#arc-cdk.ElastiCache.property.userGroupIds">userGroupIds</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="arc-cdk.ElastiCache.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="arc-cdk.ElastiCache.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="arc-cdk.ElastiCache.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="arc-cdk.ElastiCache.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `source`<sup>Required</sup> <a name="source" id="arc-cdk.ElastiCache.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

---

##### `providers`<sup>Optional</sup> <a name="providers" id="arc-cdk.ElastiCache.property.providers"></a>

```typescript
public readonly providers: TerraformProvider | TerraformModuleProvider[];
```

- *Type:* cdktf.TerraformProvider | cdktf.TerraformModuleProvider[]

---

##### `skipAssetCreationFromLocalModules`<sup>Optional</sup> <a name="skipAssetCreationFromLocalModules" id="arc-cdk.ElastiCache.property.skipAssetCreationFromLocalModules"></a>

```typescript
public readonly skipAssetCreationFromLocalModules: boolean;
```

- *Type:* boolean

---

##### `version`<sup>Optional</sup> <a name="version" id="arc-cdk.ElastiCache.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="arc-cdk.ElastiCache.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="arc-cdk.ElastiCache.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `arnOutput`<sup>Required</sup> <a name="arnOutput" id="arc-cdk.ElastiCache.property.arnOutput"></a>

```typescript
public readonly arnOutput: string;
```

- *Type:* string

---

##### `clusterEnabledOutput`<sup>Required</sup> <a name="clusterEnabledOutput" id="arc-cdk.ElastiCache.property.clusterEnabledOutput"></a>

```typescript
public readonly clusterEnabledOutput: string;
```

- *Type:* string

---

##### `endpointOutput`<sup>Required</sup> <a name="endpointOutput" id="arc-cdk.ElastiCache.property.endpointOutput"></a>

```typescript
public readonly endpointOutput: string;
```

- *Type:* string

---

##### `engineVersionActualOutput`<sup>Required</sup> <a name="engineVersionActualOutput" id="arc-cdk.ElastiCache.property.engineVersionActualOutput"></a>

```typescript
public readonly engineVersionActualOutput: string;
```

- *Type:* string

---

##### `hostOutput`<sup>Required</sup> <a name="hostOutput" id="arc-cdk.ElastiCache.property.hostOutput"></a>

```typescript
public readonly hostOutput: string;
```

- *Type:* string

---

##### `idOutput`<sup>Required</sup> <a name="idOutput" id="arc-cdk.ElastiCache.property.idOutput"></a>

```typescript
public readonly idOutput: string;
```

- *Type:* string

---

##### `memberClustersOutput`<sup>Required</sup> <a name="memberClustersOutput" id="arc-cdk.ElastiCache.property.memberClustersOutput"></a>

```typescript
public readonly memberClustersOutput: string;
```

- *Type:* string

---

##### `portOutput`<sup>Required</sup> <a name="portOutput" id="arc-cdk.ElastiCache.property.portOutput"></a>

```typescript
public readonly portOutput: string;
```

- *Type:* string

---

##### `readerEndpointAddressOutput`<sup>Required</sup> <a name="readerEndpointAddressOutput" id="arc-cdk.ElastiCache.property.readerEndpointAddressOutput"></a>

```typescript
public readonly readerEndpointAddressOutput: string;
```

- *Type:* string

---

##### `securityGroupIdOutput`<sup>Required</sup> <a name="securityGroupIdOutput" id="arc-cdk.ElastiCache.property.securityGroupIdOutput"></a>

```typescript
public readonly securityGroupIdOutput: string;
```

- *Type:* string

---

##### `securityGroupNameOutput`<sup>Required</sup> <a name="securityGroupNameOutput" id="arc-cdk.ElastiCache.property.securityGroupNameOutput"></a>

```typescript
public readonly securityGroupNameOutput: string;
```

- *Type:* string

---

##### `context`<sup>Required</sup> <a name="context" id="arc-cdk.ElastiCache.property.context"></a>

```typescript
public readonly context: any;
```

- *Type:* any

---

##### `descriptorFormats`<sup>Required</sup> <a name="descriptorFormats" id="arc-cdk.ElastiCache.property.descriptorFormats"></a>

```typescript
public readonly descriptorFormats: any;
```

- *Type:* any

---

##### `parameter`<sup>Required</sup> <a name="parameter" id="arc-cdk.ElastiCache.property.parameter"></a>

```typescript
public readonly parameter: any;
```

- *Type:* any

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="arc-cdk.ElastiCache.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="arc-cdk.ElastiCache.property.zoneId"></a>

```typescript
public readonly zoneId: any;
```

- *Type:* any

---

##### `additionalSecurityGroupRules`<sup>Optional</sup> <a name="additionalSecurityGroupRules" id="arc-cdk.ElastiCache.property.additionalSecurityGroupRules"></a>

```typescript
public readonly additionalSecurityGroupRules: any[];
```

- *Type:* any[]

---

##### `additionalTagMap`<sup>Optional</sup> <a name="additionalTagMap" id="arc-cdk.ElastiCache.property.additionalTagMap"></a>

```typescript
public readonly additionalTagMap: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `alarmActions`<sup>Optional</sup> <a name="alarmActions" id="arc-cdk.ElastiCache.property.alarmActions"></a>

```typescript
public readonly alarmActions: string[];
```

- *Type:* string[]

---

##### `alarmCpuThresholdPercent`<sup>Optional</sup> <a name="alarmCpuThresholdPercent" id="arc-cdk.ElastiCache.property.alarmCpuThresholdPercent"></a>

```typescript
public readonly alarmCpuThresholdPercent: number;
```

- *Type:* number

---

##### `alarmMemoryThresholdBytes`<sup>Optional</sup> <a name="alarmMemoryThresholdBytes" id="arc-cdk.ElastiCache.property.alarmMemoryThresholdBytes"></a>

```typescript
public readonly alarmMemoryThresholdBytes: number;
```

- *Type:* number

---

##### `allowAllEgress`<sup>Optional</sup> <a name="allowAllEgress" id="arc-cdk.ElastiCache.property.allowAllEgress"></a>

```typescript
public readonly allowAllEgress: boolean;
```

- *Type:* boolean

---

##### `allowedCidrBlocks`<sup>Optional</sup> <a name="allowedCidrBlocks" id="arc-cdk.ElastiCache.property.allowedCidrBlocks"></a>

```typescript
public readonly allowedCidrBlocks: string[];
```

- *Type:* string[]

---

##### `allowedSecurityGroupIds`<sup>Optional</sup> <a name="allowedSecurityGroupIds" id="arc-cdk.ElastiCache.property.allowedSecurityGroupIds"></a>

```typescript
public readonly allowedSecurityGroupIds: string[];
```

- *Type:* string[]

---

##### `allowedSecurityGroups`<sup>Optional</sup> <a name="allowedSecurityGroups" id="arc-cdk.ElastiCache.property.allowedSecurityGroups"></a>

```typescript
public readonly allowedSecurityGroups: string[];
```

- *Type:* string[]

---

##### `applyImmediately`<sup>Optional</sup> <a name="applyImmediately" id="arc-cdk.ElastiCache.property.applyImmediately"></a>

```typescript
public readonly applyImmediately: boolean;
```

- *Type:* boolean

---

##### `associatedSecurityGroupIds`<sup>Optional</sup> <a name="associatedSecurityGroupIds" id="arc-cdk.ElastiCache.property.associatedSecurityGroupIds"></a>

```typescript
public readonly associatedSecurityGroupIds: string[];
```

- *Type:* string[]

---

##### `atRestEncryptionEnabled`<sup>Optional</sup> <a name="atRestEncryptionEnabled" id="arc-cdk.ElastiCache.property.atRestEncryptionEnabled"></a>

```typescript
public readonly atRestEncryptionEnabled: boolean;
```

- *Type:* boolean

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="arc-cdk.ElastiCache.property.attributes"></a>

```typescript
public readonly attributes: string[];
```

- *Type:* string[]

---

##### `authToken`<sup>Optional</sup> <a name="authToken" id="arc-cdk.ElastiCache.property.authToken"></a>

```typescript
public readonly authToken: string;
```

- *Type:* string

---

##### `automaticFailoverEnabled`<sup>Optional</sup> <a name="automaticFailoverEnabled" id="arc-cdk.ElastiCache.property.automaticFailoverEnabled"></a>

```typescript
public readonly automaticFailoverEnabled: boolean;
```

- *Type:* boolean

---

##### `autoMinorVersionUpgrade`<sup>Optional</sup> <a name="autoMinorVersionUpgrade" id="arc-cdk.ElastiCache.property.autoMinorVersionUpgrade"></a>

```typescript
public readonly autoMinorVersionUpgrade: boolean;
```

- *Type:* boolean

---

##### `availabilityZones`<sup>Optional</sup> <a name="availabilityZones" id="arc-cdk.ElastiCache.property.availabilityZones"></a>

```typescript
public readonly availabilityZones: string[];
```

- *Type:* string[]

---

##### `cloudwatchMetricAlarmsEnabled`<sup>Optional</sup> <a name="cloudwatchMetricAlarmsEnabled" id="arc-cdk.ElastiCache.property.cloudwatchMetricAlarmsEnabled"></a>

```typescript
public readonly cloudwatchMetricAlarmsEnabled: boolean;
```

- *Type:* boolean

---

##### `clusterModeEnabled`<sup>Optional</sup> <a name="clusterModeEnabled" id="arc-cdk.ElastiCache.property.clusterModeEnabled"></a>

```typescript
public readonly clusterModeEnabled: boolean;
```

- *Type:* boolean

---

##### `clusterModeNumNodeGroups`<sup>Optional</sup> <a name="clusterModeNumNodeGroups" id="arc-cdk.ElastiCache.property.clusterModeNumNodeGroups"></a>

```typescript
public readonly clusterModeNumNodeGroups: number;
```

- *Type:* number

---

##### `clusterModeReplicasPerNodeGroup`<sup>Optional</sup> <a name="clusterModeReplicasPerNodeGroup" id="arc-cdk.ElastiCache.property.clusterModeReplicasPerNodeGroup"></a>

```typescript
public readonly clusterModeReplicasPerNodeGroup: number;
```

- *Type:* number

---

##### `clusterSize`<sup>Optional</sup> <a name="clusterSize" id="arc-cdk.ElastiCache.property.clusterSize"></a>

```typescript
public readonly clusterSize: number;
```

- *Type:* number

---

##### `createSecurityGroup`<sup>Optional</sup> <a name="createSecurityGroup" id="arc-cdk.ElastiCache.property.createSecurityGroup"></a>

```typescript
public readonly createSecurityGroup: boolean;
```

- *Type:* boolean

---

##### `dataTieringEnabled`<sup>Optional</sup> <a name="dataTieringEnabled" id="arc-cdk.ElastiCache.property.dataTieringEnabled"></a>

```typescript
public readonly dataTieringEnabled: boolean;
```

- *Type:* boolean

---

##### `delimiter`<sup>Optional</sup> <a name="delimiter" id="arc-cdk.ElastiCache.property.delimiter"></a>

```typescript
public readonly delimiter: string;
```

- *Type:* string

---

##### `description`<sup>Optional</sup> <a name="description" id="arc-cdk.ElastiCache.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `dnsSubdomain`<sup>Optional</sup> <a name="dnsSubdomain" id="arc-cdk.ElastiCache.property.dnsSubdomain"></a>

```typescript
public readonly dnsSubdomain: string;
```

- *Type:* string

---

##### `egressCidrBlocks`<sup>Optional</sup> <a name="egressCidrBlocks" id="arc-cdk.ElastiCache.property.egressCidrBlocks"></a>

```typescript
public readonly egressCidrBlocks: any[];
```

- *Type:* any[]

---

##### `elasticacheSubnetGroupName`<sup>Optional</sup> <a name="elasticacheSubnetGroupName" id="arc-cdk.ElastiCache.property.elasticacheSubnetGroupName"></a>

```typescript
public readonly elasticacheSubnetGroupName: string;
```

- *Type:* string

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="arc-cdk.ElastiCache.property.enabled"></a>

```typescript
public readonly enabled: boolean;
```

- *Type:* boolean

---

##### `engineVersion`<sup>Optional</sup> <a name="engineVersion" id="arc-cdk.ElastiCache.property.engineVersion"></a>

```typescript
public readonly engineVersion: string;
```

- *Type:* string

---

##### `environment`<sup>Optional</sup> <a name="environment" id="arc-cdk.ElastiCache.property.environment"></a>

```typescript
public readonly environment: string;
```

- *Type:* string

---

##### `existingSecurityGroups`<sup>Optional</sup> <a name="existingSecurityGroups" id="arc-cdk.ElastiCache.property.existingSecurityGroups"></a>

```typescript
public readonly existingSecurityGroups: string[];
```

- *Type:* string[]

---

##### `family`<sup>Optional</sup> <a name="family" id="arc-cdk.ElastiCache.property.family"></a>

```typescript
public readonly family: string;
```

- *Type:* string

---

##### `finalSnapshotIdentifier`<sup>Optional</sup> <a name="finalSnapshotIdentifier" id="arc-cdk.ElastiCache.property.finalSnapshotIdentifier"></a>

```typescript
public readonly finalSnapshotIdentifier: string;
```

- *Type:* string

---

##### `idLengthLimit`<sup>Optional</sup> <a name="idLengthLimit" id="arc-cdk.ElastiCache.property.idLengthLimit"></a>

```typescript
public readonly idLengthLimit: number;
```

- *Type:* number

---

##### `instanceType`<sup>Optional</sup> <a name="instanceType" id="arc-cdk.ElastiCache.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="arc-cdk.ElastiCache.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `labelKeyCase`<sup>Optional</sup> <a name="labelKeyCase" id="arc-cdk.ElastiCache.property.labelKeyCase"></a>

```typescript
public readonly labelKeyCase: string;
```

- *Type:* string

---

##### `labelOrder`<sup>Optional</sup> <a name="labelOrder" id="arc-cdk.ElastiCache.property.labelOrder"></a>

```typescript
public readonly labelOrder: string[];
```

- *Type:* string[]

---

##### `labelsAsTags`<sup>Optional</sup> <a name="labelsAsTags" id="arc-cdk.ElastiCache.property.labelsAsTags"></a>

```typescript
public readonly labelsAsTags: string[];
```

- *Type:* string[]

---

##### `labelValueCase`<sup>Optional</sup> <a name="labelValueCase" id="arc-cdk.ElastiCache.property.labelValueCase"></a>

```typescript
public readonly labelValueCase: string;
```

- *Type:* string

---

##### `logDeliveryConfiguration`<sup>Optional</sup> <a name="logDeliveryConfiguration" id="arc-cdk.ElastiCache.property.logDeliveryConfiguration"></a>

```typescript
public readonly logDeliveryConfiguration: {[ key: string ]: any}[];
```

- *Type:* {[ key: string ]: any}[]

---

##### `maintenanceWindow`<sup>Optional</sup> <a name="maintenanceWindow" id="arc-cdk.ElastiCache.property.maintenanceWindow"></a>

```typescript
public readonly maintenanceWindow: string;
```

- *Type:* string

---

##### `multiAzEnabled`<sup>Optional</sup> <a name="multiAzEnabled" id="arc-cdk.ElastiCache.property.multiAzEnabled"></a>

```typescript
public readonly multiAzEnabled: boolean;
```

- *Type:* boolean

---

##### `name`<sup>Optional</sup> <a name="name" id="arc-cdk.ElastiCache.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="arc-cdk.ElastiCache.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `notificationTopicArn`<sup>Optional</sup> <a name="notificationTopicArn" id="arc-cdk.ElastiCache.property.notificationTopicArn"></a>

```typescript
public readonly notificationTopicArn: string;
```

- *Type:* string

---

##### `okActions`<sup>Optional</sup> <a name="okActions" id="arc-cdk.ElastiCache.property.okActions"></a>

```typescript
public readonly okActions: string[];
```

- *Type:* string[]

---

##### `parameterGroupDescription`<sup>Optional</sup> <a name="parameterGroupDescription" id="arc-cdk.ElastiCache.property.parameterGroupDescription"></a>

```typescript
public readonly parameterGroupDescription: string;
```

- *Type:* string

---

##### `port`<sup>Optional</sup> <a name="port" id="arc-cdk.ElastiCache.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `regexReplaceChars`<sup>Optional</sup> <a name="regexReplaceChars" id="arc-cdk.ElastiCache.property.regexReplaceChars"></a>

```typescript
public readonly regexReplaceChars: string;
```

- *Type:* string

---

##### `replicationGroupId`<sup>Optional</sup> <a name="replicationGroupId" id="arc-cdk.ElastiCache.property.replicationGroupId"></a>

```typescript
public readonly replicationGroupId: string;
```

- *Type:* string

---

##### `securityGroupCreateBeforeDestroy`<sup>Optional</sup> <a name="securityGroupCreateBeforeDestroy" id="arc-cdk.ElastiCache.property.securityGroupCreateBeforeDestroy"></a>

```typescript
public readonly securityGroupCreateBeforeDestroy: boolean;
```

- *Type:* boolean

---

##### `securityGroupCreateTimeout`<sup>Optional</sup> <a name="securityGroupCreateTimeout" id="arc-cdk.ElastiCache.property.securityGroupCreateTimeout"></a>

```typescript
public readonly securityGroupCreateTimeout: string;
```

- *Type:* string

---

##### `securityGroupDeleteTimeout`<sup>Optional</sup> <a name="securityGroupDeleteTimeout" id="arc-cdk.ElastiCache.property.securityGroupDeleteTimeout"></a>

```typescript
public readonly securityGroupDeleteTimeout: string;
```

- *Type:* string

---

##### `securityGroupDescription`<sup>Optional</sup> <a name="securityGroupDescription" id="arc-cdk.ElastiCache.property.securityGroupDescription"></a>

```typescript
public readonly securityGroupDescription: string;
```

- *Type:* string

---

##### `securityGroupName`<sup>Optional</sup> <a name="securityGroupName" id="arc-cdk.ElastiCache.property.securityGroupName"></a>

```typescript
public readonly securityGroupName: string[];
```

- *Type:* string[]

---

##### `snapshotArns`<sup>Optional</sup> <a name="snapshotArns" id="arc-cdk.ElastiCache.property.snapshotArns"></a>

```typescript
public readonly snapshotArns: string[];
```

- *Type:* string[]

---

##### `snapshotName`<sup>Optional</sup> <a name="snapshotName" id="arc-cdk.ElastiCache.property.snapshotName"></a>

```typescript
public readonly snapshotName: string;
```

- *Type:* string

---

##### `snapshotRetentionLimit`<sup>Optional</sup> <a name="snapshotRetentionLimit" id="arc-cdk.ElastiCache.property.snapshotRetentionLimit"></a>

```typescript
public readonly snapshotRetentionLimit: number;
```

- *Type:* number

---

##### `snapshotWindow`<sup>Optional</sup> <a name="snapshotWindow" id="arc-cdk.ElastiCache.property.snapshotWindow"></a>

```typescript
public readonly snapshotWindow: string;
```

- *Type:* string

---

##### `stage`<sup>Optional</sup> <a name="stage" id="arc-cdk.ElastiCache.property.stage"></a>

```typescript
public readonly stage: string;
```

- *Type:* string

---

##### `subnets`<sup>Optional</sup> <a name="subnets" id="arc-cdk.ElastiCache.property.subnets"></a>

```typescript
public readonly subnets: string[];
```

- *Type:* string[]

---

##### `tags`<sup>Optional</sup> <a name="tags" id="arc-cdk.ElastiCache.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tenant`<sup>Optional</sup> <a name="tenant" id="arc-cdk.ElastiCache.property.tenant"></a>

```typescript
public readonly tenant: string;
```

- *Type:* string

---

##### `transitEncryptionEnabled`<sup>Optional</sup> <a name="transitEncryptionEnabled" id="arc-cdk.ElastiCache.property.transitEncryptionEnabled"></a>

```typescript
public readonly transitEncryptionEnabled: boolean;
```

- *Type:* boolean

---

##### `useExistingSecurityGroups`<sup>Optional</sup> <a name="useExistingSecurityGroups" id="arc-cdk.ElastiCache.property.useExistingSecurityGroups"></a>

```typescript
public readonly useExistingSecurityGroups: boolean;
```

- *Type:* boolean

---

##### `userGroupIds`<sup>Optional</sup> <a name="userGroupIds" id="arc-cdk.ElastiCache.property.userGroupIds"></a>

```typescript
public readonly userGroupIds: string[];
```

- *Type:* string[]

---


### Lambda <a name="Lambda" id="arc-cdk.Lambda"></a>

#### Initializers <a name="Initializers" id="arc-cdk.Lambda.Initializer"></a>

```typescript
import { Lambda } from 'arc-cdk'

new Lambda(scope: Construct, id: string, config: ILambda)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#arc-cdk.Lambda.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The parent construct of this stack. |
| <code><a href="#arc-cdk.Lambda.Initializer.parameter.id">id</a></code> | <code>string</code> | The ID of the construct. |
| <code><a href="#arc-cdk.Lambda.Initializer.parameter.config">config</a></code> | <code><a href="#arc-cdk.ILambda">ILambda</a></code> | The configuration options for this resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="arc-cdk.Lambda.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The parent construct of this stack.

---

##### `id`<sup>Required</sup> <a name="id" id="arc-cdk.Lambda.Initializer.parameter.id"></a>

- *Type:* string

The ID of the construct.

---

##### `config`<sup>Required</sup> <a name="config" id="arc-cdk.Lambda.Initializer.parameter.config"></a>

- *Type:* <a href="#arc-cdk.ILambda">ILambda</a>

The configuration options for this resource.

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
| <code><a href="#arc-cdk.Lambda.property.arn">arn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the Lambda function. |
| <code><a href="#arc-cdk.Lambda.property.functionName">functionName</a></code> | <code>string</code> | The name of the Lambda function. |
| <code><a href="#arc-cdk.Lambda.property.lambdaFunc">lambdaFunc</a></code> | <code>@cdktf/provider-aws.lambdaFunction.LambdaFunction</code> | The LambdaFunction construct representing the created Lambda function. |

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

The Amazon Resource Name (ARN) of the Lambda function.

---

##### `functionName`<sup>Required</sup> <a name="functionName" id="arc-cdk.Lambda.property.functionName"></a>

```typescript
public readonly functionName: string;
```

- *Type:* string

The name of the Lambda function.

---

##### `lambdaFunc`<sup>Required</sup> <a name="lambdaFunc" id="arc-cdk.Lambda.property.lambdaFunc"></a>

```typescript
public readonly lambdaFunc: LambdaFunction;
```

- *Type:* @cdktf/provider-aws.lambdaFunction.LambdaFunction

The LambdaFunction construct representing the created Lambda function.

---


### LambdaWithApiGateway <a name="LambdaWithApiGateway" id="arc-cdk.LambdaWithApiGateway"></a>

#### Initializers <a name="Initializers" id="arc-cdk.LambdaWithApiGateway.Initializer"></a>

```typescript
import { LambdaWithApiGateway } from 'arc-cdk'

new LambdaWithApiGateway(scope: Construct, id: string, config: ILambdaWithApiGateway)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#arc-cdk.LambdaWithApiGateway.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The parent construct of this stack. |
| <code><a href="#arc-cdk.LambdaWithApiGateway.Initializer.parameter.id">id</a></code> | <code>string</code> | The ID of the construct. |
| <code><a href="#arc-cdk.LambdaWithApiGateway.Initializer.parameter.config">config</a></code> | <code><a href="#arc-cdk.ILambdaWithApiGateway">ILambdaWithApiGateway</a></code> | The configuration options for this resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="arc-cdk.LambdaWithApiGateway.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The parent construct of this stack.

---

##### `id`<sup>Required</sup> <a name="id" id="arc-cdk.LambdaWithApiGateway.Initializer.parameter.id"></a>

- *Type:* string

The ID of the construct.

---

##### `config`<sup>Required</sup> <a name="config" id="arc-cdk.LambdaWithApiGateway.Initializer.parameter.config"></a>

- *Type:* <a href="#arc-cdk.ILambdaWithApiGateway">ILambdaWithApiGateway</a>

The configuration options for this resource.

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
| <code><a href="#arc-cdk.LambdaWithApiGateway.property.url">url</a></code> | <code>string</code> | The HTTP URL of the API Gateway or the domain name if the custom domain name is provided. |

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

The HTTP URL of the API Gateway or the domain name if the custom domain name is provided.

---


### LambdaWithCloudWatchEvent <a name="LambdaWithCloudWatchEvent" id="arc-cdk.LambdaWithCloudWatchEvent"></a>

#### Initializers <a name="Initializers" id="arc-cdk.LambdaWithCloudWatchEvent.Initializer"></a>

```typescript
import { LambdaWithCloudWatchEvent } from 'arc-cdk'

new LambdaWithCloudWatchEvent(scope: Construct, id: string, config: ILambdaWithCloudWatchEvent)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#arc-cdk.LambdaWithCloudWatchEvent.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The parent construct of this stack. |
| <code><a href="#arc-cdk.LambdaWithCloudWatchEvent.Initializer.parameter.id">id</a></code> | <code>string</code> | The ID of the construct. |
| <code><a href="#arc-cdk.LambdaWithCloudWatchEvent.Initializer.parameter.config">config</a></code> | <code><a href="#arc-cdk.ILambdaWithCloudWatchEvent">ILambdaWithCloudWatchEvent</a></code> | The configuration options for this resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="arc-cdk.LambdaWithCloudWatchEvent.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The parent construct of this stack.

---

##### `id`<sup>Required</sup> <a name="id" id="arc-cdk.LambdaWithCloudWatchEvent.Initializer.parameter.id"></a>

- *Type:* string

The ID of the construct.

---

##### `config`<sup>Required</sup> <a name="config" id="arc-cdk.LambdaWithCloudWatchEvent.Initializer.parameter.config"></a>

- *Type:* <a href="#arc-cdk.ILambdaWithCloudWatchEvent">ILambdaWithCloudWatchEvent</a>

The configuration options for this resource.

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
| <code><a href="#arc-cdk.LambdaWithSns.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The parent construct of this stack. |
| <code><a href="#arc-cdk.LambdaWithSns.Initializer.parameter.id">id</a></code> | <code>string</code> | The ID of the construct. |
| <code><a href="#arc-cdk.LambdaWithSns.Initializer.parameter.config">config</a></code> | <code><a href="#arc-cdk.ILambdaWithSns">ILambdaWithSns</a></code> | The configuration options for this resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="arc-cdk.LambdaWithSns.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The parent construct of this stack.

---

##### `id`<sup>Required</sup> <a name="id" id="arc-cdk.LambdaWithSns.Initializer.parameter.id"></a>

- *Type:* string

The ID of the construct.

---

##### `config`<sup>Required</sup> <a name="config" id="arc-cdk.LambdaWithSns.Initializer.parameter.config"></a>

- *Type:* <a href="#arc-cdk.ILambdaWithSns">ILambdaWithSns</a>

The configuration options for this resource.

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
| <code><a href="#arc-cdk.LambdaWithSqs.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The parent construct of this stack. |
| <code><a href="#arc-cdk.LambdaWithSqs.Initializer.parameter.id">id</a></code> | <code>string</code> | The ID of the construct. |
| <code><a href="#arc-cdk.LambdaWithSqs.Initializer.parameter.config">config</a></code> | <code><a href="#arc-cdk.ILambdaWithSqs">ILambdaWithSqs</a></code> | The configuration options for this resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="arc-cdk.LambdaWithSqs.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The parent construct of this stack.

---

##### `id`<sup>Required</sup> <a name="id" id="arc-cdk.LambdaWithSqs.Initializer.parameter.id"></a>

- *Type:* string

The ID of the construct.

---

##### `config`<sup>Required</sup> <a name="config" id="arc-cdk.LambdaWithSqs.Initializer.parameter.config"></a>

- *Type:* <a href="#arc-cdk.ILambdaWithSqs">ILambdaWithSqs</a>

The configuration options for this resource.

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


## Structs <a name="Structs" id="Structs"></a>

### DbModuleConfig <a name="DbModuleConfig" id="arc-cdk.DbModuleConfig"></a>

#### Initializer <a name="Initializer" id="arc-cdk.DbModuleConfig.Initializer"></a>

```typescript
import { DbModuleConfig } from 'arc-cdk'

const dbModuleConfig: DbModuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#arc-cdk.DbModuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#arc-cdk.DbModuleConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#arc-cdk.DbModuleConfig.property.providers">providers</a></code> | <code>cdktf.TerraformProvider \| cdktf.TerraformModuleProvider[]</code> | *No description.* |
| <code><a href="#arc-cdk.DbModuleConfig.property.skipAssetCreationFromLocalModules">skipAssetCreationFromLocalModules</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#arc-cdk.DbModuleConfig.property.enhancedMonitoringName">enhancedMonitoringName</a></code> | <code>string</code> | Name to assign the enhanced monitoring resources. |
| <code><a href="#arc-cdk.DbModuleConfig.property.environment">environment</a></code> | <code>string</code> | ID element. |
| <code><a href="#arc-cdk.DbModuleConfig.property.namespace">namespace</a></code> | <code>string</code> | ID element. |
| <code><a href="#arc-cdk.DbModuleConfig.property.vpcId">vpcId</a></code> | <code>string</code> | vpc_id for the VPC to run the cluster. |
| <code><a href="#arc-cdk.DbModuleConfig.property.accountId">accountId</a></code> | <code>string</code> | Account ID where the resources will be deployed to. |
| <code><a href="#arc-cdk.DbModuleConfig.property.additionalTagMap">additionalTagMap</a></code> | <code>{[ key: string ]: string}</code> | Additional key-value pairs to add to each map in `tags_as_list_of_maps`. |
| <code><a href="#arc-cdk.DbModuleConfig.property.attributes">attributes</a></code> | <code>string[]</code> | ID element. |
| <code><a href="#arc-cdk.DbModuleConfig.property.auroraAllowedCidrBlocks">auroraAllowedCidrBlocks</a></code> | <code>string[]</code> | List of CIDR blocks allowed to access the cluster. |
| <code><a href="#arc-cdk.DbModuleConfig.property.auroraAllowMajorVersionUpgrade">auroraAllowMajorVersionUpgrade</a></code> | <code>boolean</code> | Enable to allow major engine version upgrades when changing engine versions. |
| <code><a href="#arc-cdk.DbModuleConfig.property.auroraAutoMinorVersionUpgrade">auroraAutoMinorVersionUpgrade</a></code> | <code>boolean</code> | Indicates that minor engine upgrades will be applied automatically to the DB instance during the maintenance window. |
| <code><a href="#arc-cdk.DbModuleConfig.property.auroraClusterEnabled">auroraClusterEnabled</a></code> | <code>boolean</code> | Enable creation of an Aurora Cluster. |
| <code><a href="#arc-cdk.DbModuleConfig.property.auroraClusterFamily">auroraClusterFamily</a></code> | <code>string</code> | The family of the DB cluster parameter group. |
| <code><a href="#arc-cdk.DbModuleConfig.property.auroraClusterName">auroraClusterName</a></code> | <code>string</code> | Database name (default is not to create a database). |
| <code><a href="#arc-cdk.DbModuleConfig.property.auroraClusterSize">auroraClusterSize</a></code> | <code>number</code> | Number of DB instances to create in the cluster. |
| <code><a href="#arc-cdk.DbModuleConfig.property.auroraDbAdminPassword">auroraDbAdminPassword</a></code> | <code>string</code> | Password of the DB admin. |
| <code><a href="#arc-cdk.DbModuleConfig.property.auroraDbAdminUsername">auroraDbAdminUsername</a></code> | <code>string</code> | Name of the default DB admin user role. |
| <code><a href="#arc-cdk.DbModuleConfig.property.auroraDbName">auroraDbName</a></code> | <code>string</code> | Database name. |
| <code><a href="#arc-cdk.DbModuleConfig.property.auroraEngine">auroraEngine</a></code> | <code>string</code> | The name of the database engine to be used for this DB cluster. |
| <code><a href="#arc-cdk.DbModuleConfig.property.auroraEngineMode">auroraEngineMode</a></code> | <code>string</code> | The database engine mode. |
| <code><a href="#arc-cdk.DbModuleConfig.property.auroraEngineVersion">auroraEngineVersion</a></code> | <code>string</code> | The version of the database engine tocl use. |
| <code><a href="#arc-cdk.DbModuleConfig.property.auroraInstanceType">auroraInstanceType</a></code> | <code>string</code> | Instance type to use. |
| <code><a href="#arc-cdk.DbModuleConfig.property.auroraScalingConfiguration">auroraScalingConfiguration</a></code> | <code>any</code> | List of nested attributes with scaling properties. |
| <code><a href="#arc-cdk.DbModuleConfig.property.auroraSecurityGroups">auroraSecurityGroups</a></code> | <code>string[]</code> | List of security group IDs to be allowed to connect to the DB instance. |
| <code><a href="#arc-cdk.DbModuleConfig.property.auroraServerlessv2ScalingConfiguration">auroraServerlessv2ScalingConfiguration</a></code> | <code>any</code> | serverlessv2 scaling properties. |
| <code><a href="#arc-cdk.DbModuleConfig.property.auroraSubnets">auroraSubnets</a></code> | <code>string[]</code> | Subnets for the cluster to run in. |
| <code><a href="#arc-cdk.DbModuleConfig.property.context">context</a></code> | <code>any</code> | Single object for setting entire context at once. |
| <code><a href="#arc-cdk.DbModuleConfig.property.deletionProtection">deletionProtection</a></code> | <code>boolean</code> | Protect the instance from being deleted. |
| <code><a href="#arc-cdk.DbModuleConfig.property.deletionWindowInDays">deletionWindowInDays</a></code> | <code>number</code> | undefined. |
| <code><a href="#arc-cdk.DbModuleConfig.property.delimiter">delimiter</a></code> | <code>string</code> | Delimiter to be used between ID elements. |
| <code><a href="#arc-cdk.DbModuleConfig.property.descriptorFormats">descriptorFormats</a></code> | <code>any</code> | Describe additional descriptors to be output in the `descriptors` output map. |
| <code><a href="#arc-cdk.DbModuleConfig.property.enableCustomOptionGroup">enableCustomOptionGroup</a></code> | <code>boolean</code> | Enable the custom Option Group for restoring backups via S3. |
| <code><a href="#arc-cdk.DbModuleConfig.property.enabled">enabled</a></code> | <code>boolean</code> | Set to false to prevent the module from creating any resources. |
| <code><a href="#arc-cdk.DbModuleConfig.property.enableKeyRotation">enableKeyRotation</a></code> | <code>boolean</code> | undefined. |
| <code><a href="#arc-cdk.DbModuleConfig.property.enhancedMonitoringArn">enhancedMonitoringArn</a></code> | <code>string</code> | ARN to the enhanced monitoring policy. |
| <code><a href="#arc-cdk.DbModuleConfig.property.idLengthLimit">idLengthLimit</a></code> | <code>number</code> | Limit `id` to this many characters (minimum 6). |
| <code><a href="#arc-cdk.DbModuleConfig.property.labelKeyCase">labelKeyCase</a></code> | <code>string</code> | Controls the letter case of the `tags` keys (label names) for tags generated by this module. |
| <code><a href="#arc-cdk.DbModuleConfig.property.labelOrder">labelOrder</a></code> | <code>string[]</code> | The order in which the labels (ID elements) appear in the `id`. |
| <code><a href="#arc-cdk.DbModuleConfig.property.labelsAsTags">labelsAsTags</a></code> | <code>string[]</code> | Set of labels (ID elements) to include as tags in the `tags` output. |
| <code><a href="#arc-cdk.DbModuleConfig.property.labelValueCase">labelValueCase</a></code> | <code>string</code> | Controls the letter case of ID elements (labels) as included in `id`, set as tag values, and output by this module individually. |
| <code><a href="#arc-cdk.DbModuleConfig.property.name">name</a></code> | <code>string</code> | ID element. |
| <code><a href="#arc-cdk.DbModuleConfig.property.rdsInstanceAllocatedStorage">rdsInstanceAllocatedStorage</a></code> | <code>number</code> | The allocated storage in GBs. |
| <code><a href="#arc-cdk.DbModuleConfig.property.rdsInstanceAllowedCidrBlocks">rdsInstanceAllowedCidrBlocks</a></code> | <code>string[]</code> | The whitelisted CIDRs which to allow ingress traffic to the DB instance. |
| <code><a href="#arc-cdk.DbModuleConfig.property.rdsInstanceAllowMajorVersionUpgrade">rdsInstanceAllowMajorVersionUpgrade</a></code> | <code>boolean</code> | Allow major version upgrade. |
| <code><a href="#arc-cdk.DbModuleConfig.property.rdsInstanceApplyImmediately">rdsInstanceApplyImmediately</a></code> | <code>boolean</code> | Specifies whether any database modifications are applied immediately, or during the next maintenance window. |
| <code><a href="#arc-cdk.DbModuleConfig.property.rdsInstanceAutoMinorVersionUpgrade">rdsInstanceAutoMinorVersionUpgrade</a></code> | <code>boolean</code> | Allow automated minor version upgrade (e.g. from Postgres 9.5.3 to Postgres 9.5.4). |
| <code><a href="#arc-cdk.DbModuleConfig.property.rdsInstanceBackupRetentionPeriod">rdsInstanceBackupRetentionPeriod</a></code> | <code>number</code> | Backup retention period in days. |
| <code><a href="#arc-cdk.DbModuleConfig.property.rdsInstanceBackupWindow">rdsInstanceBackupWindow</a></code> | <code>string</code> | When AWS can perform DB snapshots, can't overlap with maintenance window. |
| <code><a href="#arc-cdk.DbModuleConfig.property.rdsInstanceCaCertIdentifier">rdsInstanceCaCertIdentifier</a></code> | <code>string</code> | The identifier of the CA certificate for the DB instance. |
| <code><a href="#arc-cdk.DbModuleConfig.property.rdsInstanceCopyTagsToSnapshot">rdsInstanceCopyTagsToSnapshot</a></code> | <code>boolean</code> | Copy tags from DB to a snapshot. |
| <code><a href="#arc-cdk.DbModuleConfig.property.rdsInstanceDatabaseName">rdsInstanceDatabaseName</a></code> | <code>string</code> | The name of the database to create when the DB instance is created. |
| <code><a href="#arc-cdk.DbModuleConfig.property.rdsInstanceDatabasePassword">rdsInstanceDatabasePassword</a></code> | <code>string</code> | Password for the primary DB user. |
| <code><a href="#arc-cdk.DbModuleConfig.property.rdsInstanceDatabasePort">rdsInstanceDatabasePort</a></code> | <code>number</code> | Database port (_e.g._ 3306 for MySQL). Used in the DB Security Group to allow access to the DB instance from the provided security_group_ids. |
| <code><a href="#arc-cdk.DbModuleConfig.property.rdsInstanceDatabaseUser">rdsInstanceDatabaseUser</a></code> | <code>string</code> | The name of the database to create when the DB instance is created. |
| <code><a href="#arc-cdk.DbModuleConfig.property.rdsInstanceDbOptions">rdsInstanceDbOptions</a></code> | <code>any</code> | A list of DB options to apply with an option group. |
| <code><a href="#arc-cdk.DbModuleConfig.property.rdsInstanceDbParameter">rdsInstanceDbParameter</a></code> | <code>any</code> | A list of DB parameters to apply. |
| <code><a href="#arc-cdk.DbModuleConfig.property.rdsInstanceDbParameterGroup">rdsInstanceDbParameterGroup</a></code> | <code>string</code> | The DB parameter group family name. |
| <code><a href="#arc-cdk.DbModuleConfig.property.rdsInstanceDnsZoneId">rdsInstanceDnsZoneId</a></code> | <code>string</code> | The ID of the DNS Zone in Route53 where a new DNS record will be created for the DB host name. |
| <code><a href="#arc-cdk.DbModuleConfig.property.rdsInstanceEnabled">rdsInstanceEnabled</a></code> | <code>boolean</code> | Enable creation of an RDS instance. |
| <code><a href="#arc-cdk.DbModuleConfig.property.rdsInstanceEngine">rdsInstanceEngine</a></code> | <code>string</code> | Database engine type. |
| <code><a href="#arc-cdk.DbModuleConfig.property.rdsInstanceEngineVersion">rdsInstanceEngineVersion</a></code> | <code>string</code> | Database engine version, depends on engine type. |
| <code><a href="#arc-cdk.DbModuleConfig.property.rdsInstanceHostName">rdsInstanceHostName</a></code> | <code>string</code> | The DB host name created in Route53. |
| <code><a href="#arc-cdk.DbModuleConfig.property.rdsInstanceInstanceClass">rdsInstanceInstanceClass</a></code> | <code>string</code> | Class of RDS instance. |
| <code><a href="#arc-cdk.DbModuleConfig.property.rdsInstanceLicenseModel">rdsInstanceLicenseModel</a></code> | <code>string</code> | License model for this DB. |
| <code><a href="#arc-cdk.DbModuleConfig.property.rdsInstanceMaintenanceWindow">rdsInstanceMaintenanceWindow</a></code> | <code>string</code> | The window to perform maintenance in. |
| <code><a href="#arc-cdk.DbModuleConfig.property.rdsInstanceMajorEngineVersion">rdsInstanceMajorEngineVersion</a></code> | <code>string</code> | major_engine_version	Database MAJOR engine version, depends on engine type. |
| <code><a href="#arc-cdk.DbModuleConfig.property.rdsInstanceMultiAz">rdsInstanceMultiAz</a></code> | <code>boolean</code> | Set to true if multi AZ deployment must be supported. |
| <code><a href="#arc-cdk.DbModuleConfig.property.rdsInstanceName">rdsInstanceName</a></code> | <code>string</code> | RDS Instance name. |
| <code><a href="#arc-cdk.DbModuleConfig.property.rdsInstanceOptionGroupName">rdsInstanceOptionGroupName</a></code> | <code>string</code> | Name of the DB option group to associate. |
| <code><a href="#arc-cdk.DbModuleConfig.property.rdsInstancePubliclyAccessible">rdsInstancePubliclyAccessible</a></code> | <code>boolean</code> | Determines if database can be publicly available (NOT recommended). |
| <code><a href="#arc-cdk.DbModuleConfig.property.rdsInstanceSecurityGroupIds">rdsInstanceSecurityGroupIds</a></code> | <code>string[]</code> | The IDs of the security groups from which to allow ingress traffic to the DB instance. |
| <code><a href="#arc-cdk.DbModuleConfig.property.rdsInstanceSkipFinalSnapshot">rdsInstanceSkipFinalSnapshot</a></code> | <code>boolean</code> | If true (default), no snapshot will be made before deleting DB. |
| <code><a href="#arc-cdk.DbModuleConfig.property.rdsInstanceSnapshotIdentifier">rdsInstanceSnapshotIdentifier</a></code> | <code>string</code> | Snapshot identifier e.g: rds:production-2019-06-26-06-05. If specified, the module create cluster from the snapshot. |
| <code><a href="#arc-cdk.DbModuleConfig.property.rdsInstanceStorageEncrypted">rdsInstanceStorageEncrypted</a></code> | <code>boolean</code> | Specifies whether the DB instance is encrypted. |
| <code><a href="#arc-cdk.DbModuleConfig.property.rdsInstanceStorageType">rdsInstanceStorageType</a></code> | <code>string</code> | One of 'standard' (magnetic), 'gp2' (general purpose SSD), or 'io1' (provisioned IOPS SSD). |
| <code><a href="#arc-cdk.DbModuleConfig.property.rdsInstanceSubnetIds">rdsInstanceSubnetIds</a></code> | <code>string[]</code> | List of subnet IDs for the DB. |
| <code><a href="#arc-cdk.DbModuleConfig.property.rdsKmsKeyArnOverride">rdsKmsKeyArnOverride</a></code> | <code>string</code> | Override the default created KMS key to encrypt storage. |
| <code><a href="#arc-cdk.DbModuleConfig.property.rdsKmsKeyIdOverride">rdsKmsKeyIdOverride</a></code> | <code>string</code> | Override the default created KMS key ID to encrypt storage. |
| <code><a href="#arc-cdk.DbModuleConfig.property.regexReplaceChars">regexReplaceChars</a></code> | <code>string</code> | Terraform regular expression (regex) string. |
| <code><a href="#arc-cdk.DbModuleConfig.property.region">region</a></code> | <code>string</code> | Region which the resource is deployed to. |
| <code><a href="#arc-cdk.DbModuleConfig.property.s3KmsAliasOverride">s3KmsAliasOverride</a></code> | <code>string</code> | Override the KMS key alias for the S3 bucket. |
| <code><a href="#arc-cdk.DbModuleConfig.property.stage">stage</a></code> | <code>string</code> | ID element. |
| <code><a href="#arc-cdk.DbModuleConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Additional tags (e.g. `{'BusinessUnit': 'XYZ'}`). Neither the tag keys nor the tag values will be modified by this module. |
| <code><a href="#arc-cdk.DbModuleConfig.property.tenant">tenant</a></code> | <code>string</code> | ID element _(Rarely used, not included by default)_. |

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="arc-cdk.DbModuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="arc-cdk.DbModuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `providers`<sup>Optional</sup> <a name="providers" id="arc-cdk.DbModuleConfig.property.providers"></a>

```typescript
public readonly providers: TerraformProvider | TerraformModuleProvider[];
```

- *Type:* cdktf.TerraformProvider | cdktf.TerraformModuleProvider[]

---

##### `skipAssetCreationFromLocalModules`<sup>Optional</sup> <a name="skipAssetCreationFromLocalModules" id="arc-cdk.DbModuleConfig.property.skipAssetCreationFromLocalModules"></a>

```typescript
public readonly skipAssetCreationFromLocalModules: boolean;
```

- *Type:* boolean

---

##### `enhancedMonitoringName`<sup>Required</sup> <a name="enhancedMonitoringName" id="arc-cdk.DbModuleConfig.property.enhancedMonitoringName"></a>

```typescript
public readonly enhancedMonitoringName: string;
```

- *Type:* string

Name to assign the enhanced monitoring resources.

---

##### `environment`<sup>Required</sup> <a name="environment" id="arc-cdk.DbModuleConfig.property.environment"></a>

```typescript
public readonly environment: string;
```

- *Type:* string

ID element.

Usually used for region e.g. 'uw2', 'us-west-2', OR role 'prod', 'staging', 'dev', 'UAT'

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="arc-cdk.DbModuleConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

ID element.

Usually an abbreviation of your organization name, e.g. 'eg' or 'cp', to help ensure generated IDs are globally unique

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="arc-cdk.DbModuleConfig.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

vpc_id for the VPC to run the cluster.

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="arc-cdk.DbModuleConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Account ID where the resources will be deployed to.

This is required if `enable_custom_option_group` is set to `true`.

---

##### `additionalTagMap`<sup>Optional</sup> <a name="additionalTagMap" id="arc-cdk.DbModuleConfig.property.additionalTagMap"></a>

```typescript
public readonly additionalTagMap: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}
- *Default:* [object Object] The property type contains a map, they have special handling, please see {@link cdk.tf/module-map-inputs the docs}

Additional key-value pairs to add to each map in `tags_as_list_of_maps`.

Not added to `tags` or `id`.
This is for some rare cases where resources want additional configuration of tags
and therefore take a list of maps with tag key, value, and additional configuration.

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="arc-cdk.DbModuleConfig.property.attributes"></a>

```typescript
public readonly attributes: string[];
```

- *Type:* string[]

ID element.

Additional attributes (e.g. `workers` or `cluster`) to add to `id`,
in the order they appear in the list. New attributes are appended to the
end of the list. The elements of the list are joined by the `delimiter`
and treated as a single ID element.

---

##### `auroraAllowedCidrBlocks`<sup>Optional</sup> <a name="auroraAllowedCidrBlocks" id="arc-cdk.DbModuleConfig.property.auroraAllowedCidrBlocks"></a>

```typescript
public readonly auroraAllowedCidrBlocks: string[];
```

- *Type:* string[]

List of CIDR blocks allowed to access the cluster.

---

##### `auroraAllowMajorVersionUpgrade`<sup>Optional</sup> <a name="auroraAllowMajorVersionUpgrade" id="arc-cdk.DbModuleConfig.property.auroraAllowMajorVersionUpgrade"></a>

```typescript
public readonly auroraAllowMajorVersionUpgrade: boolean;
```

- *Type:* boolean

Enable to allow major engine version upgrades when changing engine versions.

Defaults to false.

---

##### `auroraAutoMinorVersionUpgrade`<sup>Optional</sup> <a name="auroraAutoMinorVersionUpgrade" id="arc-cdk.DbModuleConfig.property.auroraAutoMinorVersionUpgrade"></a>

```typescript
public readonly auroraAutoMinorVersionUpgrade: boolean;
```

- *Type:* boolean
- *Default:* true

Indicates that minor engine upgrades will be applied automatically to the DB instance during the maintenance window.

---

##### `auroraClusterEnabled`<sup>Optional</sup> <a name="auroraClusterEnabled" id="arc-cdk.DbModuleConfig.property.auroraClusterEnabled"></a>

```typescript
public readonly auroraClusterEnabled: boolean;
```

- *Type:* boolean

Enable creation of an Aurora Cluster.

---

##### `auroraClusterFamily`<sup>Optional</sup> <a name="auroraClusterFamily" id="arc-cdk.DbModuleConfig.property.auroraClusterFamily"></a>

```typescript
public readonly auroraClusterFamily: string;
```

- *Type:* string
- *Default:* aurora-postgresql14

The family of the DB cluster parameter group.

---

##### `auroraClusterName`<sup>Optional</sup> <a name="auroraClusterName" id="arc-cdk.DbModuleConfig.property.auroraClusterName"></a>

```typescript
public readonly auroraClusterName: string;
```

- *Type:* string

Database name (default is not to create a database).

---

##### `auroraClusterSize`<sup>Optional</sup> <a name="auroraClusterSize" id="arc-cdk.DbModuleConfig.property.auroraClusterSize"></a>

```typescript
public readonly auroraClusterSize: number;
```

- *Type:* number

Number of DB instances to create in the cluster.

---

##### `auroraDbAdminPassword`<sup>Optional</sup> <a name="auroraDbAdminPassword" id="arc-cdk.DbModuleConfig.property.auroraDbAdminPassword"></a>

```typescript
public readonly auroraDbAdminPassword: string;
```

- *Type:* string

Password of the DB admin.

---

##### `auroraDbAdminUsername`<sup>Optional</sup> <a name="auroraDbAdminUsername" id="arc-cdk.DbModuleConfig.property.auroraDbAdminUsername"></a>

```typescript
public readonly auroraDbAdminUsername: string;
```

- *Type:* string

Name of the default DB admin user role.

---

##### `auroraDbName`<sup>Optional</sup> <a name="auroraDbName" id="arc-cdk.DbModuleConfig.property.auroraDbName"></a>

```typescript
public readonly auroraDbName: string;
```

- *Type:* string
- *Default:* auroradb

Database name.

---

##### `auroraEngine`<sup>Optional</sup> <a name="auroraEngine" id="arc-cdk.DbModuleConfig.property.auroraEngine"></a>

```typescript
public readonly auroraEngine: string;
```

- *Type:* string
- *Default:* aurora-postgresql

The name of the database engine to be used for this DB cluster.

Valid values: `aurora`, `aurora-mysql`, `aurora-postgresql`

---

##### `auroraEngineMode`<sup>Optional</sup> <a name="auroraEngineMode" id="arc-cdk.DbModuleConfig.property.auroraEngineMode"></a>

```typescript
public readonly auroraEngineMode: string;
```

- *Type:* string
- *Default:* provisioned

The database engine mode.

Valid values: `parallelquery`, `provisioned`, `serverless`

---

##### `auroraEngineVersion`<sup>Optional</sup> <a name="auroraEngineVersion" id="arc-cdk.DbModuleConfig.property.auroraEngineVersion"></a>

```typescript
public readonly auroraEngineVersion: string;
```

- *Type:* string
- *Default:* 14.5

The version of the database engine tocl use.

See `aws rds describe-db-engine-versions`

---

##### `auroraInstanceType`<sup>Optional</sup> <a name="auroraInstanceType" id="arc-cdk.DbModuleConfig.property.auroraInstanceType"></a>

```typescript
public readonly auroraInstanceType: string;
```

- *Type:* string
- *Default:* db.serverless

Instance type to use.

---

##### `auroraScalingConfiguration`<sup>Optional</sup> <a name="auroraScalingConfiguration" id="arc-cdk.DbModuleConfig.property.auroraScalingConfiguration"></a>

```typescript
public readonly auroraScalingConfiguration: any;
```

- *Type:* any

List of nested attributes with scaling properties.

Only valid when engine_mode is set to serverless

---

##### `auroraSecurityGroups`<sup>Optional</sup> <a name="auroraSecurityGroups" id="arc-cdk.DbModuleConfig.property.auroraSecurityGroups"></a>

```typescript
public readonly auroraSecurityGroups: string[];
```

- *Type:* string[]

List of security group IDs to be allowed to connect to the DB instance.

---

##### `auroraServerlessv2ScalingConfiguration`<sup>Optional</sup> <a name="auroraServerlessv2ScalingConfiguration" id="arc-cdk.DbModuleConfig.property.auroraServerlessv2ScalingConfiguration"></a>

```typescript
public readonly auroraServerlessv2ScalingConfiguration: any;
```

- *Type:* any

serverlessv2 scaling properties.

---

##### `auroraSubnets`<sup>Optional</sup> <a name="auroraSubnets" id="arc-cdk.DbModuleConfig.property.auroraSubnets"></a>

```typescript
public readonly auroraSubnets: string[];
```

- *Type:* string[]

Subnets for the cluster to run in.

---

##### `context`<sup>Optional</sup> <a name="context" id="arc-cdk.DbModuleConfig.property.context"></a>

```typescript
public readonly context: any;
```

- *Type:* any
- *Default:* [object Object]

Single object for setting entire context at once.

See description of individual variables for details.
Leave string and numeric variables as `null` to use default value.
Individual variable settings (non-null) override settings in context object,
except for attributes, tags, and additional_tag_map, which are merged.

---

##### `deletionProtection`<sup>Optional</sup> <a name="deletionProtection" id="arc-cdk.DbModuleConfig.property.deletionProtection"></a>

```typescript
public readonly deletionProtection: boolean;
```

- *Type:* boolean

Protect the instance from being deleted.

---

##### `deletionWindowInDays`<sup>Optional</sup> <a name="deletionWindowInDays" id="arc-cdk.DbModuleConfig.property.deletionWindowInDays"></a>

```typescript
public readonly deletionWindowInDays: number;
```

- *Type:* number
- *Default:* 10

undefined.

---

##### `delimiter`<sup>Optional</sup> <a name="delimiter" id="arc-cdk.DbModuleConfig.property.delimiter"></a>

```typescript
public readonly delimiter: string;
```

- *Type:* string

Delimiter to be used between ID elements.

Defaults to `-` (hyphen). Set to `""` to use no delimiter at all.

---

##### `descriptorFormats`<sup>Optional</sup> <a name="descriptorFormats" id="arc-cdk.DbModuleConfig.property.descriptorFormats"></a>

```typescript
public readonly descriptorFormats: any;
```

- *Type:* any
- *Default:* [object Object]

Describe additional descriptors to be output in the `descriptors` output map.

Map of maps. Keys are names of descriptors. Values are maps of the form
`{
format = string
labels = list(string)
}`
(Type is `any` so the map values can later be enhanced to provide additional options.)
`format` is a Terraform format string to be passed to the `format()` function.
`labels` is a list of labels, in order, to pass to `format()` function.
Label values will be normalized before being passed to `format()` so they will be
identical to how they appear in `id`.
Default is `{}` (`descriptors` output will be empty).

---

##### `enableCustomOptionGroup`<sup>Optional</sup> <a name="enableCustomOptionGroup" id="arc-cdk.DbModuleConfig.property.enableCustomOptionGroup"></a>

```typescript
public readonly enableCustomOptionGroup: boolean;
```

- *Type:* boolean

Enable the custom Option Group for restoring backups via S3.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="arc-cdk.DbModuleConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean;
```

- *Type:* boolean

Set to false to prevent the module from creating any resources.

---

##### `enableKeyRotation`<sup>Optional</sup> <a name="enableKeyRotation" id="arc-cdk.DbModuleConfig.property.enableKeyRotation"></a>

```typescript
public readonly enableKeyRotation: boolean;
```

- *Type:* boolean
- *Default:* true

undefined.

---

##### `enhancedMonitoringArn`<sup>Optional</sup> <a name="enhancedMonitoringArn" id="arc-cdk.DbModuleConfig.property.enhancedMonitoringArn"></a>

```typescript
public readonly enhancedMonitoringArn: string;
```

- *Type:* string
- *Default:* arn:aws:iam::aws:policy/service-role/AmazonRDSEnhancedMonitoringRole

ARN to the enhanced monitoring policy.

---

##### `idLengthLimit`<sup>Optional</sup> <a name="idLengthLimit" id="arc-cdk.DbModuleConfig.property.idLengthLimit"></a>

```typescript
public readonly idLengthLimit: number;
```

- *Type:* number

Limit `id` to this many characters (minimum 6).

Set to `0` for unlimited length.
Set to `null` for keep the existing setting, which defaults to `0`.
Does not affect `id_full`.

---

##### `labelKeyCase`<sup>Optional</sup> <a name="labelKeyCase" id="arc-cdk.DbModuleConfig.property.labelKeyCase"></a>

```typescript
public readonly labelKeyCase: string;
```

- *Type:* string

Controls the letter case of the `tags` keys (label names) for tags generated by this module.

Does not affect keys of tags passed in via the `tags` input.
Possible values: `lower`, `title`, `upper`.
Default value: `title`.

---

##### `labelOrder`<sup>Optional</sup> <a name="labelOrder" id="arc-cdk.DbModuleConfig.property.labelOrder"></a>

```typescript
public readonly labelOrder: string[];
```

- *Type:* string[]

The order in which the labels (ID elements) appear in the `id`.

Defaults to ["namespace", "environment", "stage", "name", "attributes"].
You can omit any of the 6 labels ("tenant" is the 6th), but at least one must be present.

---

##### `labelsAsTags`<sup>Optional</sup> <a name="labelsAsTags" id="arc-cdk.DbModuleConfig.property.labelsAsTags"></a>

```typescript
public readonly labelsAsTags: string[];
```

- *Type:* string[]
- *Default:* default

Set of labels (ID elements) to include as tags in the `tags` output.

Default is to include all labels.
Tags with empty values will not be included in the `tags` output.
Set to `[]` to suppress all generated tags.
*Notes:**
The value of the `name` tag, if included, will be the `id`, not the `name`.
Unlike other `null-label` inputs, the initial setting of `labels_as_tags` cannot be
changed in later chained modules. Attempts to change it will be silently ignored.

---

##### `labelValueCase`<sup>Optional</sup> <a name="labelValueCase" id="arc-cdk.DbModuleConfig.property.labelValueCase"></a>

```typescript
public readonly labelValueCase: string;
```

- *Type:* string

Controls the letter case of ID elements (labels) as included in `id`, set as tag values, and output by this module individually.

Does not affect values of tags passed in via the `tags` input.
Possible values: `lower`, `title`, `upper` and `none` (no transformation).
Set this to `title` and set `delimiter` to `""` to yield Pascal Case IDs.
Default value: `lower`.

---

##### `name`<sup>Optional</sup> <a name="name" id="arc-cdk.DbModuleConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

ID element.

Usually the component or solution name, e.g. 'app' or 'jenkins'.
This is the only ID element not also included as a `tag`.
The "name" tag is set to the full `id` string. There is no tag with the value of the `name` input.

---

##### `rdsInstanceAllocatedStorage`<sup>Optional</sup> <a name="rdsInstanceAllocatedStorage" id="arc-cdk.DbModuleConfig.property.rdsInstanceAllocatedStorage"></a>

```typescript
public readonly rdsInstanceAllocatedStorage: number;
```

- *Type:* number
- *Default:* 20

The allocated storage in GBs.

Required unless a snapshot_identifier or replicate_source_db is provided.

---

##### `rdsInstanceAllowedCidrBlocks`<sup>Optional</sup> <a name="rdsInstanceAllowedCidrBlocks" id="arc-cdk.DbModuleConfig.property.rdsInstanceAllowedCidrBlocks"></a>

```typescript
public readonly rdsInstanceAllowedCidrBlocks: string[];
```

- *Type:* string[]

The whitelisted CIDRs which to allow ingress traffic to the DB instance.

---

##### `rdsInstanceAllowMajorVersionUpgrade`<sup>Optional</sup> <a name="rdsInstanceAllowMajorVersionUpgrade" id="arc-cdk.DbModuleConfig.property.rdsInstanceAllowMajorVersionUpgrade"></a>

```typescript
public readonly rdsInstanceAllowMajorVersionUpgrade: boolean;
```

- *Type:* boolean

Allow major version upgrade.

---

##### `rdsInstanceApplyImmediately`<sup>Optional</sup> <a name="rdsInstanceApplyImmediately" id="arc-cdk.DbModuleConfig.property.rdsInstanceApplyImmediately"></a>

```typescript
public readonly rdsInstanceApplyImmediately: boolean;
```

- *Type:* boolean
- *Default:* true

Specifies whether any database modifications are applied immediately, or during the next maintenance window.

---

##### `rdsInstanceAutoMinorVersionUpgrade`<sup>Optional</sup> <a name="rdsInstanceAutoMinorVersionUpgrade" id="arc-cdk.DbModuleConfig.property.rdsInstanceAutoMinorVersionUpgrade"></a>

```typescript
public readonly rdsInstanceAutoMinorVersionUpgrade: boolean;
```

- *Type:* boolean
- *Default:* true

Allow automated minor version upgrade (e.g. from Postgres 9.5.3 to Postgres 9.5.4).

---

##### `rdsInstanceBackupRetentionPeriod`<sup>Optional</sup> <a name="rdsInstanceBackupRetentionPeriod" id="arc-cdk.DbModuleConfig.property.rdsInstanceBackupRetentionPeriod"></a>

```typescript
public readonly rdsInstanceBackupRetentionPeriod: number;
```

- *Type:* number

Backup retention period in days.

Must be > 0 to enable backups

---

##### `rdsInstanceBackupWindow`<sup>Optional</sup> <a name="rdsInstanceBackupWindow" id="arc-cdk.DbModuleConfig.property.rdsInstanceBackupWindow"></a>

```typescript
public readonly rdsInstanceBackupWindow: string;
```

- *Type:* string
- *Default:* 22:00-03:00

When AWS can perform DB snapshots, can't overlap with maintenance window.

---

##### `rdsInstanceCaCertIdentifier`<sup>Optional</sup> <a name="rdsInstanceCaCertIdentifier" id="arc-cdk.DbModuleConfig.property.rdsInstanceCaCertIdentifier"></a>

```typescript
public readonly rdsInstanceCaCertIdentifier: string;
```

- *Type:* string

The identifier of the CA certificate for the DB instance.

---

##### `rdsInstanceCopyTagsToSnapshot`<sup>Optional</sup> <a name="rdsInstanceCopyTagsToSnapshot" id="arc-cdk.DbModuleConfig.property.rdsInstanceCopyTagsToSnapshot"></a>

```typescript
public readonly rdsInstanceCopyTagsToSnapshot: boolean;
```

- *Type:* boolean
- *Default:* true

Copy tags from DB to a snapshot.

---

##### `rdsInstanceDatabaseName`<sup>Optional</sup> <a name="rdsInstanceDatabaseName" id="arc-cdk.DbModuleConfig.property.rdsInstanceDatabaseName"></a>

```typescript
public readonly rdsInstanceDatabaseName: string;
```

- *Type:* string

The name of the database to create when the DB instance is created.

---

##### `rdsInstanceDatabasePassword`<sup>Optional</sup> <a name="rdsInstanceDatabasePassword" id="arc-cdk.DbModuleConfig.property.rdsInstanceDatabasePassword"></a>

```typescript
public readonly rdsInstanceDatabasePassword: string;
```

- *Type:* string

Password for the primary DB user.

Required unless a snapshot_identifier or replicate_source_db is provided.

---

##### `rdsInstanceDatabasePort`<sup>Optional</sup> <a name="rdsInstanceDatabasePort" id="arc-cdk.DbModuleConfig.property.rdsInstanceDatabasePort"></a>

```typescript
public readonly rdsInstanceDatabasePort: number;
```

- *Type:* number
- *Default:* 5432

Database port (_e.g._ 3306 for MySQL). Used in the DB Security Group to allow access to the DB instance from the provided security_group_ids.

---

##### `rdsInstanceDatabaseUser`<sup>Optional</sup> <a name="rdsInstanceDatabaseUser" id="arc-cdk.DbModuleConfig.property.rdsInstanceDatabaseUser"></a>

```typescript
public readonly rdsInstanceDatabaseUser: string;
```

- *Type:* string
- *Default:* admin

The name of the database to create when the DB instance is created.

---

##### `rdsInstanceDbOptions`<sup>Optional</sup> <a name="rdsInstanceDbOptions" id="arc-cdk.DbModuleConfig.property.rdsInstanceDbOptions"></a>

```typescript
public readonly rdsInstanceDbOptions: any;
```

- *Type:* any

A list of DB options to apply with an option group.

Depends on DB engine

---

##### `rdsInstanceDbParameter`<sup>Optional</sup> <a name="rdsInstanceDbParameter" id="arc-cdk.DbModuleConfig.property.rdsInstanceDbParameter"></a>

```typescript
public readonly rdsInstanceDbParameter: any;
```

- *Type:* any

A list of DB parameters to apply.

Note that parameters may differ from a DB family to another

---

##### `rdsInstanceDbParameterGroup`<sup>Optional</sup> <a name="rdsInstanceDbParameterGroup" id="arc-cdk.DbModuleConfig.property.rdsInstanceDbParameterGroup"></a>

```typescript
public readonly rdsInstanceDbParameterGroup: string;
```

- *Type:* string
- *Default:* postgres14

The DB parameter group family name.

The value depends on DB engine used. See DBParameterGroupFamily for instructions on how to retrieve applicable value.

---

##### `rdsInstanceDnsZoneId`<sup>Optional</sup> <a name="rdsInstanceDnsZoneId" id="arc-cdk.DbModuleConfig.property.rdsInstanceDnsZoneId"></a>

```typescript
public readonly rdsInstanceDnsZoneId: string;
```

- *Type:* string

The ID of the DNS Zone in Route53 where a new DNS record will be created for the DB host name.

---

##### `rdsInstanceEnabled`<sup>Optional</sup> <a name="rdsInstanceEnabled" id="arc-cdk.DbModuleConfig.property.rdsInstanceEnabled"></a>

```typescript
public readonly rdsInstanceEnabled: boolean;
```

- *Type:* boolean

Enable creation of an RDS instance.

---

##### `rdsInstanceEngine`<sup>Optional</sup> <a name="rdsInstanceEngine" id="arc-cdk.DbModuleConfig.property.rdsInstanceEngine"></a>

```typescript
public readonly rdsInstanceEngine: string;
```

- *Type:* string
- *Default:* postgres

Database engine type.

Required unless a snapshot_identifier or replicate_source_db is provided. For supported values, see the Engine parameter in API action CreateDBInstance.

---

##### `rdsInstanceEngineVersion`<sup>Optional</sup> <a name="rdsInstanceEngineVersion" id="arc-cdk.DbModuleConfig.property.rdsInstanceEngineVersion"></a>

```typescript
public readonly rdsInstanceEngineVersion: string;
```

- *Type:* string
- *Default:* 14.3

Database engine version, depends on engine type.

Required unless a snapshot_identifier or replicate_source_db is provided.

---

##### `rdsInstanceHostName`<sup>Optional</sup> <a name="rdsInstanceHostName" id="arc-cdk.DbModuleConfig.property.rdsInstanceHostName"></a>

```typescript
public readonly rdsInstanceHostName: string;
```

- *Type:* string
- *Default:* db

The DB host name created in Route53.

---

##### `rdsInstanceInstanceClass`<sup>Optional</sup> <a name="rdsInstanceInstanceClass" id="arc-cdk.DbModuleConfig.property.rdsInstanceInstanceClass"></a>

```typescript
public readonly rdsInstanceInstanceClass: string;
```

- *Type:* string
- *Default:* db.t2.medium

Class of RDS instance.

---

##### `rdsInstanceLicenseModel`<sup>Optional</sup> <a name="rdsInstanceLicenseModel" id="arc-cdk.DbModuleConfig.property.rdsInstanceLicenseModel"></a>

```typescript
public readonly rdsInstanceLicenseModel: string;
```

- *Type:* string

License model for this DB.

Optional, but required for some DB Engines. Valid values: license-included | bring-your-own-license | general-public-license

---

##### `rdsInstanceMaintenanceWindow`<sup>Optional</sup> <a name="rdsInstanceMaintenanceWindow" id="arc-cdk.DbModuleConfig.property.rdsInstanceMaintenanceWindow"></a>

```typescript
public readonly rdsInstanceMaintenanceWindow: string;
```

- *Type:* string
- *Default:* Mon:03:00-Mon:04:00

The window to perform maintenance in.

Syntax: 'ddd:hh24:mi-ddd:hh24:mi' UTC

---

##### `rdsInstanceMajorEngineVersion`<sup>Optional</sup> <a name="rdsInstanceMajorEngineVersion" id="arc-cdk.DbModuleConfig.property.rdsInstanceMajorEngineVersion"></a>

```typescript
public readonly rdsInstanceMajorEngineVersion: string;
```

- *Type:* string
- *Default:* 14

major_engine_version	Database MAJOR engine version, depends on engine type.

---

##### `rdsInstanceMultiAz`<sup>Optional</sup> <a name="rdsInstanceMultiAz" id="arc-cdk.DbModuleConfig.property.rdsInstanceMultiAz"></a>

```typescript
public readonly rdsInstanceMultiAz: boolean;
```

- *Type:* boolean

Set to true if multi AZ deployment must be supported.

---

##### `rdsInstanceName`<sup>Optional</sup> <a name="rdsInstanceName" id="arc-cdk.DbModuleConfig.property.rdsInstanceName"></a>

```typescript
public readonly rdsInstanceName: string;
```

- *Type:* string

RDS Instance name.

---

##### `rdsInstanceOptionGroupName`<sup>Optional</sup> <a name="rdsInstanceOptionGroupName" id="arc-cdk.DbModuleConfig.property.rdsInstanceOptionGroupName"></a>

```typescript
public readonly rdsInstanceOptionGroupName: string;
```

- *Type:* string

Name of the DB option group to associate.

---

##### `rdsInstancePubliclyAccessible`<sup>Optional</sup> <a name="rdsInstancePubliclyAccessible" id="arc-cdk.DbModuleConfig.property.rdsInstancePubliclyAccessible"></a>

```typescript
public readonly rdsInstancePubliclyAccessible: boolean;
```

- *Type:* boolean

Determines if database can be publicly available (NOT recommended).

---

##### `rdsInstanceSecurityGroupIds`<sup>Optional</sup> <a name="rdsInstanceSecurityGroupIds" id="arc-cdk.DbModuleConfig.property.rdsInstanceSecurityGroupIds"></a>

```typescript
public readonly rdsInstanceSecurityGroupIds: string[];
```

- *Type:* string[]

The IDs of the security groups from which to allow ingress traffic to the DB instance.

---

##### `rdsInstanceSkipFinalSnapshot`<sup>Optional</sup> <a name="rdsInstanceSkipFinalSnapshot" id="arc-cdk.DbModuleConfig.property.rdsInstanceSkipFinalSnapshot"></a>

```typescript
public readonly rdsInstanceSkipFinalSnapshot: boolean;
```

- *Type:* boolean
- *Default:* true

If true (default), no snapshot will be made before deleting DB.

---

##### `rdsInstanceSnapshotIdentifier`<sup>Optional</sup> <a name="rdsInstanceSnapshotIdentifier" id="arc-cdk.DbModuleConfig.property.rdsInstanceSnapshotIdentifier"></a>

```typescript
public readonly rdsInstanceSnapshotIdentifier: string;
```

- *Type:* string

Snapshot identifier e.g: rds:production-2019-06-26-06-05. If specified, the module create cluster from the snapshot.

---

##### `rdsInstanceStorageEncrypted`<sup>Optional</sup> <a name="rdsInstanceStorageEncrypted" id="arc-cdk.DbModuleConfig.property.rdsInstanceStorageEncrypted"></a>

```typescript
public readonly rdsInstanceStorageEncrypted: boolean;
```

- *Type:* boolean
- *Default:* true

Specifies whether the DB instance is encrypted.

The default is false if not specified

---

##### `rdsInstanceStorageType`<sup>Optional</sup> <a name="rdsInstanceStorageType" id="arc-cdk.DbModuleConfig.property.rdsInstanceStorageType"></a>

```typescript
public readonly rdsInstanceStorageType: string;
```

- *Type:* string
- *Default:* gp2

One of 'standard' (magnetic), 'gp2' (general purpose SSD), or 'io1' (provisioned IOPS SSD).

---

##### `rdsInstanceSubnetIds`<sup>Optional</sup> <a name="rdsInstanceSubnetIds" id="arc-cdk.DbModuleConfig.property.rdsInstanceSubnetIds"></a>

```typescript
public readonly rdsInstanceSubnetIds: string[];
```

- *Type:* string[]

List of subnet IDs for the DB.

DB instance will be created in the VPC associated with the DB subnet group provisioned using the subnet IDs. Specify one of subnet_ids, db_subnet_group_name or availability_zone

---

##### `rdsKmsKeyArnOverride`<sup>Optional</sup> <a name="rdsKmsKeyArnOverride" id="arc-cdk.DbModuleConfig.property.rdsKmsKeyArnOverride"></a>

```typescript
public readonly rdsKmsKeyArnOverride: string;
```

- *Type:* string

Override the default created KMS key to encrypt storage.

---

##### `rdsKmsKeyIdOverride`<sup>Optional</sup> <a name="rdsKmsKeyIdOverride" id="arc-cdk.DbModuleConfig.property.rdsKmsKeyIdOverride"></a>

```typescript
public readonly rdsKmsKeyIdOverride: string;
```

- *Type:* string

Override the default created KMS key ID to encrypt storage.

---

##### `regexReplaceChars`<sup>Optional</sup> <a name="regexReplaceChars" id="arc-cdk.DbModuleConfig.property.regexReplaceChars"></a>

```typescript
public readonly regexReplaceChars: string;
```

- *Type:* string

Terraform regular expression (regex) string.

Characters matching the regex will be removed from the ID elements.
If not set, `"/[^a-zA-Z0-9-]/"` is used to remove all characters other than hyphens, letters and digits.

---

##### `region`<sup>Optional</sup> <a name="region" id="arc-cdk.DbModuleConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string
- *Default:* us-east-1

Region which the resource is deployed to.

---

##### `s3KmsAliasOverride`<sup>Optional</sup> <a name="s3KmsAliasOverride" id="arc-cdk.DbModuleConfig.property.s3KmsAliasOverride"></a>

```typescript
public readonly s3KmsAliasOverride: string;
```

- *Type:* string

Override the KMS key alias for the S3 bucket.

Default is set to AWS Managed KMS alias.

---

##### `stage`<sup>Optional</sup> <a name="stage" id="arc-cdk.DbModuleConfig.property.stage"></a>

```typescript
public readonly stage: string;
```

- *Type:* string

ID element.

Usually used to indicate role, e.g. 'prod', 'staging', 'source', 'build', 'test', 'deploy', 'release'

---

##### `tags`<sup>Optional</sup> <a name="tags" id="arc-cdk.DbModuleConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}
- *Default:* [object Object] The property type contains a map, they have special handling, please see {@link cdk.tf/module-map-inputs the docs}

Additional tags (e.g. `{'BusinessUnit': 'XYZ'}`). Neither the tag keys nor the tag values will be modified by this module.

---

##### `tenant`<sup>Optional</sup> <a name="tenant" id="arc-cdk.DbModuleConfig.property.tenant"></a>

```typescript
public readonly tenant: string;
```

- *Type:* string

ID element _(Rarely used, not included by default)_.

A customer identifier, indicating who this instance of a resource is for

---

### ElastiCacheConfig <a name="ElastiCacheConfig" id="arc-cdk.ElastiCacheConfig"></a>

#### Initializer <a name="Initializer" id="arc-cdk.ElastiCacheConfig.Initializer"></a>

```typescript
import { ElastiCacheConfig } from 'arc-cdk'

const elastiCacheConfig: ElastiCacheConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#arc-cdk.ElastiCacheConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#arc-cdk.ElastiCacheConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#arc-cdk.ElastiCacheConfig.property.providers">providers</a></code> | <code>cdktf.TerraformProvider \| cdktf.TerraformModuleProvider[]</code> | *No description.* |
| <code><a href="#arc-cdk.ElastiCacheConfig.property.skipAssetCreationFromLocalModules">skipAssetCreationFromLocalModules</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#arc-cdk.ElastiCacheConfig.property.vpcId">vpcId</a></code> | <code>string</code> | VPC ID. |
| <code><a href="#arc-cdk.ElastiCacheConfig.property.additionalSecurityGroupRules">additionalSecurityGroupRules</a></code> | <code>any[]</code> | A list of Security Group rule objects to add to the created security group, in addition to the ones this module normally creates. |
| <code><a href="#arc-cdk.ElastiCacheConfig.property.additionalTagMap">additionalTagMap</a></code> | <code>{[ key: string ]: string}</code> | Additional key-value pairs to add to each map in `tags_as_list_of_maps`. |
| <code><a href="#arc-cdk.ElastiCacheConfig.property.alarmActions">alarmActions</a></code> | <code>string[]</code> | Alarm action list. |
| <code><a href="#arc-cdk.ElastiCacheConfig.property.alarmCpuThresholdPercent">alarmCpuThresholdPercent</a></code> | <code>number</code> | CPU threshold alarm level. |
| <code><a href="#arc-cdk.ElastiCacheConfig.property.alarmMemoryThresholdBytes">alarmMemoryThresholdBytes</a></code> | <code>number</code> | Ram threshold alarm level. |
| <code><a href="#arc-cdk.ElastiCacheConfig.property.allowAllEgress">allowAllEgress</a></code> | <code>boolean</code> | If `true`, the created security group will allow egress on all ports and protocols to all IP address. |
| <code><a href="#arc-cdk.ElastiCacheConfig.property.allowedCidrBlocks">allowedCidrBlocks</a></code> | <code>string[]</code> | DEPRECATED: Use `additional_security_group_rules` instead. |
| <code><a href="#arc-cdk.ElastiCacheConfig.property.allowedSecurityGroupIds">allowedSecurityGroupIds</a></code> | <code>string[]</code> | A list of IDs of Security Groups to allow access to the security group created by this module. |
| <code><a href="#arc-cdk.ElastiCacheConfig.property.allowedSecurityGroups">allowedSecurityGroups</a></code> | <code>string[]</code> | DEPRECATED: Use `allowed_security_group_ids` instead. |
| <code><a href="#arc-cdk.ElastiCacheConfig.property.applyImmediately">applyImmediately</a></code> | <code>boolean</code> | Apply changes immediately. |
| <code><a href="#arc-cdk.ElastiCacheConfig.property.associatedSecurityGroupIds">associatedSecurityGroupIds</a></code> | <code>string[]</code> | A list of IDs of Security Groups to associate the created resource with, in addition to the created security group. |
| <code><a href="#arc-cdk.ElastiCacheConfig.property.atRestEncryptionEnabled">atRestEncryptionEnabled</a></code> | <code>boolean</code> | Enable encryption at rest. |
| <code><a href="#arc-cdk.ElastiCacheConfig.property.attributes">attributes</a></code> | <code>string[]</code> | ID element. |
| <code><a href="#arc-cdk.ElastiCacheConfig.property.authToken">authToken</a></code> | <code>string</code> | Auth token for password protecting redis, `transit_encryption_enabled` must be set to `true`. |
| <code><a href="#arc-cdk.ElastiCacheConfig.property.automaticFailoverEnabled">automaticFailoverEnabled</a></code> | <code>boolean</code> | Automatic failover (Not available for T1/T2 instances). |
| <code><a href="#arc-cdk.ElastiCacheConfig.property.autoMinorVersionUpgrade">autoMinorVersionUpgrade</a></code> | <code>boolean</code> | Specifies whether minor version engine upgrades will be applied automatically to the underlying Cache Cluster instances during the maintenance window. |
| <code><a href="#arc-cdk.ElastiCacheConfig.property.availabilityZones">availabilityZones</a></code> | <code>string[]</code> | Availability zone IDs. |
| <code><a href="#arc-cdk.ElastiCacheConfig.property.cloudwatchMetricAlarmsEnabled">cloudwatchMetricAlarmsEnabled</a></code> | <code>boolean</code> | Boolean flag to enable/disable CloudWatch metrics alarms. |
| <code><a href="#arc-cdk.ElastiCacheConfig.property.clusterModeEnabled">clusterModeEnabled</a></code> | <code>boolean</code> | Flag to enable/disable creation of a native redis cluster. |
| <code><a href="#arc-cdk.ElastiCacheConfig.property.clusterModeNumNodeGroups">clusterModeNumNodeGroups</a></code> | <code>number</code> | Number of node groups (shards) for this Redis replication group. |
| <code><a href="#arc-cdk.ElastiCacheConfig.property.clusterModeReplicasPerNodeGroup">clusterModeReplicasPerNodeGroup</a></code> | <code>number</code> | Number of replica nodes in each node group. |
| <code><a href="#arc-cdk.ElastiCacheConfig.property.clusterSize">clusterSize</a></code> | <code>number</code> | Number of nodes in cluster. |
| <code><a href="#arc-cdk.ElastiCacheConfig.property.context">context</a></code> | <code>any</code> | Single object for setting entire context at once. |
| <code><a href="#arc-cdk.ElastiCacheConfig.property.createSecurityGroup">createSecurityGroup</a></code> | <code>boolean</code> | Set `true` to create and configure a new security group. |
| <code><a href="#arc-cdk.ElastiCacheConfig.property.dataTieringEnabled">dataTieringEnabled</a></code> | <code>boolean</code> | Enables data tiering. |
| <code><a href="#arc-cdk.ElastiCacheConfig.property.delimiter">delimiter</a></code> | <code>string</code> | Delimiter to be used between ID elements. |
| <code><a href="#arc-cdk.ElastiCacheConfig.property.description">description</a></code> | <code>string</code> | Description of elasticache replication group. |
| <code><a href="#arc-cdk.ElastiCacheConfig.property.descriptorFormats">descriptorFormats</a></code> | <code>any</code> | Describe additional descriptors to be output in the `descriptors` output map. |
| <code><a href="#arc-cdk.ElastiCacheConfig.property.dnsSubdomain">dnsSubdomain</a></code> | <code>string</code> | The subdomain to use for the CNAME record. |
| <code><a href="#arc-cdk.ElastiCacheConfig.property.egressCidrBlocks">egressCidrBlocks</a></code> | <code>any[]</code> | DEPRECATED: Use `allow_all_egress` and `additional_security_group_rules` instead. |
| <code><a href="#arc-cdk.ElastiCacheConfig.property.elasticacheSubnetGroupName">elasticacheSubnetGroupName</a></code> | <code>string</code> | Subnet group name for the ElastiCache instance. |
| <code><a href="#arc-cdk.ElastiCacheConfig.property.enabled">enabled</a></code> | <code>boolean</code> | Set to false to prevent the module from creating any resources. |
| <code><a href="#arc-cdk.ElastiCacheConfig.property.engineVersion">engineVersion</a></code> | <code>string</code> | Redis engine version. |
| <code><a href="#arc-cdk.ElastiCacheConfig.property.environment">environment</a></code> | <code>string</code> | ID element. |
| <code><a href="#arc-cdk.ElastiCacheConfig.property.existingSecurityGroups">existingSecurityGroups</a></code> | <code>string[]</code> | DEPRECATED: Use `associated_security_group_ids` instead. |
| <code><a href="#arc-cdk.ElastiCacheConfig.property.family">family</a></code> | <code>string</code> | Redis family. |
| <code><a href="#arc-cdk.ElastiCacheConfig.property.finalSnapshotIdentifier">finalSnapshotIdentifier</a></code> | <code>string</code> | The name of your final node group (shard) snapshot. |
| <code><a href="#arc-cdk.ElastiCacheConfig.property.idLengthLimit">idLengthLimit</a></code> | <code>number</code> | Limit `id` to this many characters (minimum 6). |
| <code><a href="#arc-cdk.ElastiCacheConfig.property.instanceType">instanceType</a></code> | <code>string</code> | Elastic cache instance type. |
| <code><a href="#arc-cdk.ElastiCacheConfig.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | The ARN of the key that you wish to use if encrypting at rest. |
| <code><a href="#arc-cdk.ElastiCacheConfig.property.labelKeyCase">labelKeyCase</a></code> | <code>string</code> | Controls the letter case of the `tags` keys (label names) for tags generated by this module. |
| <code><a href="#arc-cdk.ElastiCacheConfig.property.labelOrder">labelOrder</a></code> | <code>string[]</code> | The order in which the labels (ID elements) appear in the `id`. |
| <code><a href="#arc-cdk.ElastiCacheConfig.property.labelsAsTags">labelsAsTags</a></code> | <code>string[]</code> | Set of labels (ID elements) to include as tags in the `tags` output. |
| <code><a href="#arc-cdk.ElastiCacheConfig.property.labelValueCase">labelValueCase</a></code> | <code>string</code> | Controls the letter case of ID elements (labels) as included in `id`, set as tag values, and output by this module individually. |
| <code><a href="#arc-cdk.ElastiCacheConfig.property.logDeliveryConfiguration">logDeliveryConfiguration</a></code> | <code>{[ key: string ]: any}[]</code> | The log_delivery_configuration block allows the streaming of Redis SLOWLOG or Redis Engine Log to CloudWatch Logs or Kinesis Data Firehose. |
| <code><a href="#arc-cdk.ElastiCacheConfig.property.maintenanceWindow">maintenanceWindow</a></code> | <code>string</code> | Maintenance window. |
| <code><a href="#arc-cdk.ElastiCacheConfig.property.multiAzEnabled">multiAzEnabled</a></code> | <code>boolean</code> | Multi AZ (Automatic Failover must also be enabled. |
| <code><a href="#arc-cdk.ElastiCacheConfig.property.name">name</a></code> | <code>string</code> | ID element. |
| <code><a href="#arc-cdk.ElastiCacheConfig.property.namespace">namespace</a></code> | <code>string</code> | ID element. |
| <code><a href="#arc-cdk.ElastiCacheConfig.property.notificationTopicArn">notificationTopicArn</a></code> | <code>string</code> | Notification topic arn. |
| <code><a href="#arc-cdk.ElastiCacheConfig.property.okActions">okActions</a></code> | <code>string[]</code> | The list of actions to execute when this alarm transitions into an OK state from any other state. |
| <code><a href="#arc-cdk.ElastiCacheConfig.property.parameter">parameter</a></code> | <code>any</code> | A list of Redis parameters to apply. |
| <code><a href="#arc-cdk.ElastiCacheConfig.property.parameterGroupDescription">parameterGroupDescription</a></code> | <code>string</code> | Managed by Terraform. |
| <code><a href="#arc-cdk.ElastiCacheConfig.property.port">port</a></code> | <code>number</code> | Redis port. |
| <code><a href="#arc-cdk.ElastiCacheConfig.property.regexReplaceChars">regexReplaceChars</a></code> | <code>string</code> | Terraform regular expression (regex) string. |
| <code><a href="#arc-cdk.ElastiCacheConfig.property.replicationGroupId">replicationGroupId</a></code> | <code>string</code> | Replication group ID with the following constraints: A name must contain from 1 to 20 alphanumeric characters or hyphens. |
| <code><a href="#arc-cdk.ElastiCacheConfig.property.securityGroupCreateBeforeDestroy">securityGroupCreateBeforeDestroy</a></code> | <code>boolean</code> | Set `true` to enable Terraform `create_before_destroy` behavior on the created security group. |
| <code><a href="#arc-cdk.ElastiCacheConfig.property.securityGroupCreateTimeout">securityGroupCreateTimeout</a></code> | <code>string</code> | How long to wait for the security group to be created. |
| <code><a href="#arc-cdk.ElastiCacheConfig.property.securityGroupDeleteTimeout">securityGroupDeleteTimeout</a></code> | <code>string</code> | How long to retry on `DependencyViolation` errors during security group deletion. |
| <code><a href="#arc-cdk.ElastiCacheConfig.property.securityGroupDescription">securityGroupDescription</a></code> | <code>string</code> | The description to assign to the created Security Group. |
| <code><a href="#arc-cdk.ElastiCacheConfig.property.securityGroupName">securityGroupName</a></code> | <code>string[]</code> | The name to assign to the created security group. |
| <code><a href="#arc-cdk.ElastiCacheConfig.property.snapshotArns">snapshotArns</a></code> | <code>string[]</code> | A single-element string list containing an Amazon Resource Name (ARN) of a Redis RDB snapshot file stored in Amazon S3. |
| <code><a href="#arc-cdk.ElastiCacheConfig.property.snapshotName">snapshotName</a></code> | <code>string</code> | The name of a snapshot from which to restore data into the new node group. |
| <code><a href="#arc-cdk.ElastiCacheConfig.property.snapshotRetentionLimit">snapshotRetentionLimit</a></code> | <code>number</code> | The number of days for which ElastiCache will retain automatic cache cluster snapshots before deleting them. |
| <code><a href="#arc-cdk.ElastiCacheConfig.property.snapshotWindow">snapshotWindow</a></code> | <code>string</code> | The daily time range (in UTC) during which ElastiCache will begin taking a daily snapshot of your cache cluster. |
| <code><a href="#arc-cdk.ElastiCacheConfig.property.stage">stage</a></code> | <code>string</code> | ID element. |
| <code><a href="#arc-cdk.ElastiCacheConfig.property.subnets">subnets</a></code> | <code>string[]</code> | Subnet IDs. |
| <code><a href="#arc-cdk.ElastiCacheConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Additional tags (e.g. `{'BusinessUnit': 'XYZ'}`). Neither the tag keys nor the tag values will be modified by this module. |
| <code><a href="#arc-cdk.ElastiCacheConfig.property.tenant">tenant</a></code> | <code>string</code> | ID element _(Rarely used, not included by default)_. |
| <code><a href="#arc-cdk.ElastiCacheConfig.property.transitEncryptionEnabled">transitEncryptionEnabled</a></code> | <code>boolean</code> | Set `true` to enable encryption in transit. |
| <code><a href="#arc-cdk.ElastiCacheConfig.property.useExistingSecurityGroups">useExistingSecurityGroups</a></code> | <code>boolean</code> | DEPRECATED: Use `create_security_group` instead. |
| <code><a href="#arc-cdk.ElastiCacheConfig.property.userGroupIds">userGroupIds</a></code> | <code>string[]</code> | User Group ID to associate with the replication group. |
| <code><a href="#arc-cdk.ElastiCacheConfig.property.zoneId">zoneId</a></code> | <code>any</code> | Route53 DNS Zone ID as list of string (0 or 1 items). |

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="arc-cdk.ElastiCacheConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="arc-cdk.ElastiCacheConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `providers`<sup>Optional</sup> <a name="providers" id="arc-cdk.ElastiCacheConfig.property.providers"></a>

```typescript
public readonly providers: TerraformProvider | TerraformModuleProvider[];
```

- *Type:* cdktf.TerraformProvider | cdktf.TerraformModuleProvider[]

---

##### `skipAssetCreationFromLocalModules`<sup>Optional</sup> <a name="skipAssetCreationFromLocalModules" id="arc-cdk.ElastiCacheConfig.property.skipAssetCreationFromLocalModules"></a>

```typescript
public readonly skipAssetCreationFromLocalModules: boolean;
```

- *Type:* boolean

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="arc-cdk.ElastiCacheConfig.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

VPC ID.

---

##### `additionalSecurityGroupRules`<sup>Optional</sup> <a name="additionalSecurityGroupRules" id="arc-cdk.ElastiCacheConfig.property.additionalSecurityGroupRules"></a>

```typescript
public readonly additionalSecurityGroupRules: any[];
```

- *Type:* any[]

A list of Security Group rule objects to add to the created security group, in addition to the ones this module normally creates.

(To suppress the module's rules, set `create_security_group` to false
and supply your own security group via `associated_security_group_ids`.)
The keys and values of the objects are fully compatible with the `aws_security_group_rule` resource, except
for `security_group_id` which will be ignored, and the optional "key" which, if provided, must be unique and known at "plan" time.
To get more info see https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/security_group_rule .

---

##### `additionalTagMap`<sup>Optional</sup> <a name="additionalTagMap" id="arc-cdk.ElastiCacheConfig.property.additionalTagMap"></a>

```typescript
public readonly additionalTagMap: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}
- *Default:* [object Object] The property type contains a map, they have special handling, please see {@link cdk.tf/module-map-inputs the docs}

Additional key-value pairs to add to each map in `tags_as_list_of_maps`.

Not added to `tags` or `id`.
This is for some rare cases where resources want additional configuration of tags
and therefore take a list of maps with tag key, value, and additional configuration.

---

##### `alarmActions`<sup>Optional</sup> <a name="alarmActions" id="arc-cdk.ElastiCacheConfig.property.alarmActions"></a>

```typescript
public readonly alarmActions: string[];
```

- *Type:* string[]

Alarm action list.

---

##### `alarmCpuThresholdPercent`<sup>Optional</sup> <a name="alarmCpuThresholdPercent" id="arc-cdk.ElastiCacheConfig.property.alarmCpuThresholdPercent"></a>

```typescript
public readonly alarmCpuThresholdPercent: number;
```

- *Type:* number
- *Default:* 75

CPU threshold alarm level.

---

##### `alarmMemoryThresholdBytes`<sup>Optional</sup> <a name="alarmMemoryThresholdBytes" id="arc-cdk.ElastiCacheConfig.property.alarmMemoryThresholdBytes"></a>

```typescript
public readonly alarmMemoryThresholdBytes: number;
```

- *Type:* number
- *Default:* 10000000

Ram threshold alarm level.

---

##### `allowAllEgress`<sup>Optional</sup> <a name="allowAllEgress" id="arc-cdk.ElastiCacheConfig.property.allowAllEgress"></a>

```typescript
public readonly allowAllEgress: boolean;
```

- *Type:* boolean

If `true`, the created security group will allow egress on all ports and protocols to all IP address.

If this is false and no egress rules are otherwise specified, then no egress will be allowed.
Defaults to `true` unless the deprecated `egress_cidr_blocks` is provided and is not `["0.0.0.0/0"]`, in which case defaults to `false`.

---

##### `allowedCidrBlocks`<sup>Optional</sup> <a name="allowedCidrBlocks" id="arc-cdk.ElastiCacheConfig.property.allowedCidrBlocks"></a>

```typescript
public readonly allowedCidrBlocks: string[];
```

- *Type:* string[]

DEPRECATED: Use `additional_security_group_rules` instead.

Historical description: List of CIDR blocks that are allowed ingress to the cluster's Security Group created in the module

---

##### `allowedSecurityGroupIds`<sup>Optional</sup> <a name="allowedSecurityGroupIds" id="arc-cdk.ElastiCacheConfig.property.allowedSecurityGroupIds"></a>

```typescript
public readonly allowedSecurityGroupIds: string[];
```

- *Type:* string[]

A list of IDs of Security Groups to allow access to the security group created by this module.

---

##### `allowedSecurityGroups`<sup>Optional</sup> <a name="allowedSecurityGroups" id="arc-cdk.ElastiCacheConfig.property.allowedSecurityGroups"></a>

```typescript
public readonly allowedSecurityGroups: string[];
```

- *Type:* string[]

DEPRECATED: Use `allowed_security_group_ids` instead.

---

##### `applyImmediately`<sup>Optional</sup> <a name="applyImmediately" id="arc-cdk.ElastiCacheConfig.property.applyImmediately"></a>

```typescript
public readonly applyImmediately: boolean;
```

- *Type:* boolean
- *Default:* true

Apply changes immediately.

---

##### `associatedSecurityGroupIds`<sup>Optional</sup> <a name="associatedSecurityGroupIds" id="arc-cdk.ElastiCacheConfig.property.associatedSecurityGroupIds"></a>

```typescript
public readonly associatedSecurityGroupIds: string[];
```

- *Type:* string[]

A list of IDs of Security Groups to associate the created resource with, in addition to the created security group.

These security groups will not be modified and, if `create_security_group` is `false`, must provide all the required access.

---

##### `atRestEncryptionEnabled`<sup>Optional</sup> <a name="atRestEncryptionEnabled" id="arc-cdk.ElastiCacheConfig.property.atRestEncryptionEnabled"></a>

```typescript
public readonly atRestEncryptionEnabled: boolean;
```

- *Type:* boolean

Enable encryption at rest.

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="arc-cdk.ElastiCacheConfig.property.attributes"></a>

```typescript
public readonly attributes: string[];
```

- *Type:* string[]

ID element.

Additional attributes (e.g. `workers` or `cluster`) to add to `id`,
in the order they appear in the list. New attributes are appended to the
end of the list. The elements of the list are joined by the `delimiter`
and treated as a single ID element.

---

##### `authToken`<sup>Optional</sup> <a name="authToken" id="arc-cdk.ElastiCacheConfig.property.authToken"></a>

```typescript
public readonly authToken: string;
```

- *Type:* string

Auth token for password protecting redis, `transit_encryption_enabled` must be set to `true`.

Password must be longer than 16 chars

---

##### `automaticFailoverEnabled`<sup>Optional</sup> <a name="automaticFailoverEnabled" id="arc-cdk.ElastiCacheConfig.property.automaticFailoverEnabled"></a>

```typescript
public readonly automaticFailoverEnabled: boolean;
```

- *Type:* boolean

Automatic failover (Not available for T1/T2 instances).

---

##### `autoMinorVersionUpgrade`<sup>Optional</sup> <a name="autoMinorVersionUpgrade" id="arc-cdk.ElastiCacheConfig.property.autoMinorVersionUpgrade"></a>

```typescript
public readonly autoMinorVersionUpgrade: boolean;
```

- *Type:* boolean

Specifies whether minor version engine upgrades will be applied automatically to the underlying Cache Cluster instances during the maintenance window.

Only supported if the engine version is 6 or higher.

---

##### `availabilityZones`<sup>Optional</sup> <a name="availabilityZones" id="arc-cdk.ElastiCacheConfig.property.availabilityZones"></a>

```typescript
public readonly availabilityZones: string[];
```

- *Type:* string[]

Availability zone IDs.

---

##### `cloudwatchMetricAlarmsEnabled`<sup>Optional</sup> <a name="cloudwatchMetricAlarmsEnabled" id="arc-cdk.ElastiCacheConfig.property.cloudwatchMetricAlarmsEnabled"></a>

```typescript
public readonly cloudwatchMetricAlarmsEnabled: boolean;
```

- *Type:* boolean

Boolean flag to enable/disable CloudWatch metrics alarms.

---

##### `clusterModeEnabled`<sup>Optional</sup> <a name="clusterModeEnabled" id="arc-cdk.ElastiCacheConfig.property.clusterModeEnabled"></a>

```typescript
public readonly clusterModeEnabled: boolean;
```

- *Type:* boolean

Flag to enable/disable creation of a native redis cluster.

`automatic_failover_enabled` must be set to `true`. Only 1 `cluster_mode` block is allowed

---

##### `clusterModeNumNodeGroups`<sup>Optional</sup> <a name="clusterModeNumNodeGroups" id="arc-cdk.ElastiCacheConfig.property.clusterModeNumNodeGroups"></a>

```typescript
public readonly clusterModeNumNodeGroups: number;
```

- *Type:* number

Number of node groups (shards) for this Redis replication group.

Changing this number will trigger an online resizing operation before other settings modifications

---

##### `clusterModeReplicasPerNodeGroup`<sup>Optional</sup> <a name="clusterModeReplicasPerNodeGroup" id="arc-cdk.ElastiCacheConfig.property.clusterModeReplicasPerNodeGroup"></a>

```typescript
public readonly clusterModeReplicasPerNodeGroup: number;
```

- *Type:* number

Number of replica nodes in each node group.

Valid values are 0 to 5. Changing this number will force a new resource

---

##### `clusterSize`<sup>Optional</sup> <a name="clusterSize" id="arc-cdk.ElastiCacheConfig.property.clusterSize"></a>

```typescript
public readonly clusterSize: number;
```

- *Type:* number
- *Default:* 1

Number of nodes in cluster.

*Ignored when `cluster_mode_enabled` == `true`*

---

##### `context`<sup>Optional</sup> <a name="context" id="arc-cdk.ElastiCacheConfig.property.context"></a>

```typescript
public readonly context: any;
```

- *Type:* any
- *Default:* [object Object]

Single object for setting entire context at once.

See description of individual variables for details.
Leave string and numeric variables as `null` to use default value.
Individual variable settings (non-null) override settings in context object,
except for attributes, tags, and additional_tag_map, which are merged.

---

##### `createSecurityGroup`<sup>Optional</sup> <a name="createSecurityGroup" id="arc-cdk.ElastiCacheConfig.property.createSecurityGroup"></a>

```typescript
public readonly createSecurityGroup: boolean;
```

- *Type:* boolean
- *Default:* true

Set `true` to create and configure a new security group.

If false, `associated_security_group_ids` must be provided.

---

##### `dataTieringEnabled`<sup>Optional</sup> <a name="dataTieringEnabled" id="arc-cdk.ElastiCacheConfig.property.dataTieringEnabled"></a>

```typescript
public readonly dataTieringEnabled: boolean;
```

- *Type:* boolean

Enables data tiering.

Data tiering is only supported for replication groups using the r6gd node type.

---

##### `delimiter`<sup>Optional</sup> <a name="delimiter" id="arc-cdk.ElastiCacheConfig.property.delimiter"></a>

```typescript
public readonly delimiter: string;
```

- *Type:* string

Delimiter to be used between ID elements.

Defaults to `-` (hyphen). Set to `""` to use no delimiter at all.

---

##### `description`<sup>Optional</sup> <a name="description" id="arc-cdk.ElastiCacheConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Description of elasticache replication group.

---

##### `descriptorFormats`<sup>Optional</sup> <a name="descriptorFormats" id="arc-cdk.ElastiCacheConfig.property.descriptorFormats"></a>

```typescript
public readonly descriptorFormats: any;
```

- *Type:* any
- *Default:* [object Object]

Describe additional descriptors to be output in the `descriptors` output map.

Map of maps. Keys are names of descriptors. Values are maps of the form
`{
format = string
labels = list(string)
}`
(Type is `any` so the map values can later be enhanced to provide additional options.)
`format` is a Terraform format string to be passed to the `format()` function.
`labels` is a list of labels, in order, to pass to `format()` function.
Label values will be normalized before being passed to `format()` so they will be
identical to how they appear in `id`.
Default is `{}` (`descriptors` output will be empty).

---

##### `dnsSubdomain`<sup>Optional</sup> <a name="dnsSubdomain" id="arc-cdk.ElastiCacheConfig.property.dnsSubdomain"></a>

```typescript
public readonly dnsSubdomain: string;
```

- *Type:* string

The subdomain to use for the CNAME record.

If not provided then the CNAME record will use var.name.

---

##### `egressCidrBlocks`<sup>Optional</sup> <a name="egressCidrBlocks" id="arc-cdk.ElastiCacheConfig.property.egressCidrBlocks"></a>

```typescript
public readonly egressCidrBlocks: any[];
```

- *Type:* any[]

DEPRECATED: Use `allow_all_egress` and `additional_security_group_rules` instead.

Historical description: Outbound traffic address.
Historical default: ["0.0.0.0/0"]

---

##### `elasticacheSubnetGroupName`<sup>Optional</sup> <a name="elasticacheSubnetGroupName" id="arc-cdk.ElastiCacheConfig.property.elasticacheSubnetGroupName"></a>

```typescript
public readonly elasticacheSubnetGroupName: string;
```

- *Type:* string

Subnet group name for the ElastiCache instance.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="arc-cdk.ElastiCacheConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean;
```

- *Type:* boolean

Set to false to prevent the module from creating any resources.

---

##### `engineVersion`<sup>Optional</sup> <a name="engineVersion" id="arc-cdk.ElastiCacheConfig.property.engineVersion"></a>

```typescript
public readonly engineVersion: string;
```

- *Type:* string
- *Default:* 4.0.10

Redis engine version.

---

##### `environment`<sup>Optional</sup> <a name="environment" id="arc-cdk.ElastiCacheConfig.property.environment"></a>

```typescript
public readonly environment: string;
```

- *Type:* string

ID element.

Usually used for region e.g. 'uw2', 'us-west-2', OR role 'prod', 'staging', 'dev', 'UAT'

---

##### `existingSecurityGroups`<sup>Optional</sup> <a name="existingSecurityGroups" id="arc-cdk.ElastiCacheConfig.property.existingSecurityGroups"></a>

```typescript
public readonly existingSecurityGroups: string[];
```

- *Type:* string[]

DEPRECATED: Use `associated_security_group_ids` instead.

Historical description: List of existing Security Group IDs to place the cluster into.
Set `use_existing_security_groups` to `true` to enable using `existing_security_groups` as Security Groups for the cluster.

---

##### `family`<sup>Optional</sup> <a name="family" id="arc-cdk.ElastiCacheConfig.property.family"></a>

```typescript
public readonly family: string;
```

- *Type:* string
- *Default:* redis4.0

Redis family.

---

##### `finalSnapshotIdentifier`<sup>Optional</sup> <a name="finalSnapshotIdentifier" id="arc-cdk.ElastiCacheConfig.property.finalSnapshotIdentifier"></a>

```typescript
public readonly finalSnapshotIdentifier: string;
```

- *Type:* string

The name of your final node group (shard) snapshot.

ElastiCache creates the snapshot from the primary node in the cluster. If omitted, no final snapshot will be made.

---

##### `idLengthLimit`<sup>Optional</sup> <a name="idLengthLimit" id="arc-cdk.ElastiCacheConfig.property.idLengthLimit"></a>

```typescript
public readonly idLengthLimit: number;
```

- *Type:* number

Limit `id` to this many characters (minimum 6).

Set to `0` for unlimited length.
Set to `null` for keep the existing setting, which defaults to `0`.
Does not affect `id_full`.

---

##### `instanceType`<sup>Optional</sup> <a name="instanceType" id="arc-cdk.ElastiCacheConfig.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string
- *Default:* cache.t2.micro

Elastic cache instance type.

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="arc-cdk.ElastiCacheConfig.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

The ARN of the key that you wish to use if encrypting at rest.

If not supplied, uses service managed encryption. `at_rest_encryption_enabled` must be set to `true`

---

##### `labelKeyCase`<sup>Optional</sup> <a name="labelKeyCase" id="arc-cdk.ElastiCacheConfig.property.labelKeyCase"></a>

```typescript
public readonly labelKeyCase: string;
```

- *Type:* string

Controls the letter case of the `tags` keys (label names) for tags generated by this module.

Does not affect keys of tags passed in via the `tags` input.
Possible values: `lower`, `title`, `upper`.
Default value: `title`.

---

##### `labelOrder`<sup>Optional</sup> <a name="labelOrder" id="arc-cdk.ElastiCacheConfig.property.labelOrder"></a>

```typescript
public readonly labelOrder: string[];
```

- *Type:* string[]

The order in which the labels (ID elements) appear in the `id`.

Defaults to ["namespace", "environment", "stage", "name", "attributes"].
You can omit any of the 6 labels ("tenant" is the 6th), but at least one must be present.

---

##### `labelsAsTags`<sup>Optional</sup> <a name="labelsAsTags" id="arc-cdk.ElastiCacheConfig.property.labelsAsTags"></a>

```typescript
public readonly labelsAsTags: string[];
```

- *Type:* string[]
- *Default:* default

Set of labels (ID elements) to include as tags in the `tags` output.

Default is to include all labels.
Tags with empty values will not be included in the `tags` output.
Set to `[]` to suppress all generated tags.
*Notes:**
The value of the `name` tag, if included, will be the `id`, not the `name`.
Unlike other `null-label` inputs, the initial setting of `labels_as_tags` cannot be
changed in later chained modules. Attempts to change it will be silently ignored.

---

##### `labelValueCase`<sup>Optional</sup> <a name="labelValueCase" id="arc-cdk.ElastiCacheConfig.property.labelValueCase"></a>

```typescript
public readonly labelValueCase: string;
```

- *Type:* string

Controls the letter case of ID elements (labels) as included in `id`, set as tag values, and output by this module individually.

Does not affect values of tags passed in via the `tags` input.
Possible values: `lower`, `title`, `upper` and `none` (no transformation).
Set this to `title` and set `delimiter` to `""` to yield Pascal Case IDs.
Default value: `lower`.

---

##### `logDeliveryConfiguration`<sup>Optional</sup> <a name="logDeliveryConfiguration" id="arc-cdk.ElastiCacheConfig.property.logDeliveryConfiguration"></a>

```typescript
public readonly logDeliveryConfiguration: {[ key: string ]: any}[];
```

- *Type:* {[ key: string ]: any}[]
- *Default:* The property type contains a map, they have special handling, please see {@link cdk.tf/module-map-inputs the docs}

The log_delivery_configuration block allows the streaming of Redis SLOWLOG or Redis Engine Log to CloudWatch Logs or Kinesis Data Firehose.

Max of 2 blocks.

---

##### `maintenanceWindow`<sup>Optional</sup> <a name="maintenanceWindow" id="arc-cdk.ElastiCacheConfig.property.maintenanceWindow"></a>

```typescript
public readonly maintenanceWindow: string;
```

- *Type:* string
- *Default:* wed:03:00-wed:04:00

Maintenance window.

---

##### `multiAzEnabled`<sup>Optional</sup> <a name="multiAzEnabled" id="arc-cdk.ElastiCacheConfig.property.multiAzEnabled"></a>

```typescript
public readonly multiAzEnabled: boolean;
```

- *Type:* boolean

Multi AZ (Automatic Failover must also be enabled.

If Cluster Mode is enabled, Multi AZ is on by default, and this setting is ignored)

---

##### `name`<sup>Optional</sup> <a name="name" id="arc-cdk.ElastiCacheConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

ID element.

Usually the component or solution name, e.g. 'app' or 'jenkins'.
This is the only ID element not also included as a `tag`.
The "name" tag is set to the full `id` string. There is no tag with the value of the `name` input.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="arc-cdk.ElastiCacheConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

ID element.

Usually an abbreviation of your organization name, e.g. 'eg' or 'cp', to help ensure generated IDs are globally unique

---

##### `notificationTopicArn`<sup>Optional</sup> <a name="notificationTopicArn" id="arc-cdk.ElastiCacheConfig.property.notificationTopicArn"></a>

```typescript
public readonly notificationTopicArn: string;
```

- *Type:* string

Notification topic arn.

---

##### `okActions`<sup>Optional</sup> <a name="okActions" id="arc-cdk.ElastiCacheConfig.property.okActions"></a>

```typescript
public readonly okActions: string[];
```

- *Type:* string[]

The list of actions to execute when this alarm transitions into an OK state from any other state.

Each action is specified as an Amazon Resource Number (ARN)

---

##### `parameter`<sup>Optional</sup> <a name="parameter" id="arc-cdk.ElastiCacheConfig.property.parameter"></a>

```typescript
public readonly parameter: any;
```

- *Type:* any

A list of Redis parameters to apply.

Note that parameters may differ from one Redis family to another

---

##### `parameterGroupDescription`<sup>Optional</sup> <a name="parameterGroupDescription" id="arc-cdk.ElastiCacheConfig.property.parameterGroupDescription"></a>

```typescript
public readonly parameterGroupDescription: string;
```

- *Type:* string

Managed by Terraform.

---

##### `port`<sup>Optional</sup> <a name="port" id="arc-cdk.ElastiCacheConfig.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number
- *Default:* 6379

Redis port.

---

##### `regexReplaceChars`<sup>Optional</sup> <a name="regexReplaceChars" id="arc-cdk.ElastiCacheConfig.property.regexReplaceChars"></a>

```typescript
public readonly regexReplaceChars: string;
```

- *Type:* string

Terraform regular expression (regex) string.

Characters matching the regex will be removed from the ID elements.
If not set, `"/[^a-zA-Z0-9-]/"` is used to remove all characters other than hyphens, letters and digits.

---

##### `replicationGroupId`<sup>Optional</sup> <a name="replicationGroupId" id="arc-cdk.ElastiCacheConfig.property.replicationGroupId"></a>

```typescript
public readonly replicationGroupId: string;
```

- *Type:* string

Replication group ID with the following constraints: A name must contain from 1 to 20 alphanumeric characters or hyphens.

The first character must be a letter.
A name cannot end with a hyphen or contain two consecutive hyphens.

---

##### `securityGroupCreateBeforeDestroy`<sup>Optional</sup> <a name="securityGroupCreateBeforeDestroy" id="arc-cdk.ElastiCacheConfig.property.securityGroupCreateBeforeDestroy"></a>

```typescript
public readonly securityGroupCreateBeforeDestroy: boolean;
```

- *Type:* boolean
- *Default:* true

Set `true` to enable Terraform `create_before_destroy` behavior on the created security group.

We only recommend setting this `false` if you are upgrading this module and need to keep
the existing security group from being replaced.
Note that changing this value will always cause the security group to be replaced.

---

##### `securityGroupCreateTimeout`<sup>Optional</sup> <a name="securityGroupCreateTimeout" id="arc-cdk.ElastiCacheConfig.property.securityGroupCreateTimeout"></a>

```typescript
public readonly securityGroupCreateTimeout: string;
```

- *Type:* string
- *Default:* 10m

How long to wait for the security group to be created.

---

##### `securityGroupDeleteTimeout`<sup>Optional</sup> <a name="securityGroupDeleteTimeout" id="arc-cdk.ElastiCacheConfig.property.securityGroupDeleteTimeout"></a>

```typescript
public readonly securityGroupDeleteTimeout: string;
```

- *Type:* string
- *Default:* 15m

How long to retry on `DependencyViolation` errors during security group deletion.

---

##### `securityGroupDescription`<sup>Optional</sup> <a name="securityGroupDescription" id="arc-cdk.ElastiCacheConfig.property.securityGroupDescription"></a>

```typescript
public readonly securityGroupDescription: string;
```

- *Type:* string
- *Default:* Security group for Elasticache Redis

The description to assign to the created Security Group.

Warning: Changing the description causes the security group to be replaced.
Set this to `null` to maintain parity with releases <= `0.34.0`.

---

##### `securityGroupName`<sup>Optional</sup> <a name="securityGroupName" id="arc-cdk.ElastiCacheConfig.property.securityGroupName"></a>

```typescript
public readonly securityGroupName: string[];
```

- *Type:* string[]

The name to assign to the created security group.

Must be unique within the VPC.
If not provided, will be derived from the `null-label.context` passed in.
If `create_before_destroy` is true, will be used as a name prefix.

---

##### `snapshotArns`<sup>Optional</sup> <a name="snapshotArns" id="arc-cdk.ElastiCacheConfig.property.snapshotArns"></a>

```typescript
public readonly snapshotArns: string[];
```

- *Type:* string[]

A single-element string list containing an Amazon Resource Name (ARN) of a Redis RDB snapshot file stored in Amazon S3.

Example: arn:aws:s3:::my_bucket/snapshot1.rdb

---

##### `snapshotName`<sup>Optional</sup> <a name="snapshotName" id="arc-cdk.ElastiCacheConfig.property.snapshotName"></a>

```typescript
public readonly snapshotName: string;
```

- *Type:* string

The name of a snapshot from which to restore data into the new node group.

Changing the snapshot_name forces a new resource.

---

##### `snapshotRetentionLimit`<sup>Optional</sup> <a name="snapshotRetentionLimit" id="arc-cdk.ElastiCacheConfig.property.snapshotRetentionLimit"></a>

```typescript
public readonly snapshotRetentionLimit: number;
```

- *Type:* number

The number of days for which ElastiCache will retain automatic cache cluster snapshots before deleting them.

---

##### `snapshotWindow`<sup>Optional</sup> <a name="snapshotWindow" id="arc-cdk.ElastiCacheConfig.property.snapshotWindow"></a>

```typescript
public readonly snapshotWindow: string;
```

- *Type:* string
- *Default:* 06:30-07:30

The daily time range (in UTC) during which ElastiCache will begin taking a daily snapshot of your cache cluster.

---

##### `stage`<sup>Optional</sup> <a name="stage" id="arc-cdk.ElastiCacheConfig.property.stage"></a>

```typescript
public readonly stage: string;
```

- *Type:* string

ID element.

Usually used to indicate role, e.g. 'prod', 'staging', 'source', 'build', 'test', 'deploy', 'release'

---

##### `subnets`<sup>Optional</sup> <a name="subnets" id="arc-cdk.ElastiCacheConfig.property.subnets"></a>

```typescript
public readonly subnets: string[];
```

- *Type:* string[]

Subnet IDs.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="arc-cdk.ElastiCacheConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}
- *Default:* [object Object] The property type contains a map, they have special handling, please see {@link cdk.tf/module-map-inputs the docs}

Additional tags (e.g. `{'BusinessUnit': 'XYZ'}`). Neither the tag keys nor the tag values will be modified by this module.

---

##### `tenant`<sup>Optional</sup> <a name="tenant" id="arc-cdk.ElastiCacheConfig.property.tenant"></a>

```typescript
public readonly tenant: string;
```

- *Type:* string

ID element _(Rarely used, not included by default)_.

A customer identifier, indicating who this instance of a resource is for

---

##### `transitEncryptionEnabled`<sup>Optional</sup> <a name="transitEncryptionEnabled" id="arc-cdk.ElastiCacheConfig.property.transitEncryptionEnabled"></a>

```typescript
public readonly transitEncryptionEnabled: boolean;
```

- *Type:* boolean
- *Default:* true

Set `true` to enable encryption in transit.

Forced `true` if `var.auth_token` is set.
If this is enabled, use the [following guide](https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/in-transit-encryption.html#connect-tls) to access redis.

---

##### `useExistingSecurityGroups`<sup>Optional</sup> <a name="useExistingSecurityGroups" id="arc-cdk.ElastiCacheConfig.property.useExistingSecurityGroups"></a>

```typescript
public readonly useExistingSecurityGroups: boolean;
```

- *Type:* boolean

DEPRECATED: Use `create_security_group` instead.

Historical description: Flag to enable/disable creation of Security Group in the module.
Set to `true` to disable Security Group creation and provide a list of existing security Group IDs in `existing_security_groups` to place the cluster into.
Historical default: `false`

---

##### `userGroupIds`<sup>Optional</sup> <a name="userGroupIds" id="arc-cdk.ElastiCacheConfig.property.userGroupIds"></a>

```typescript
public readonly userGroupIds: string[];
```

- *Type:* string[]

User Group ID to associate with the replication group.

---

##### `zoneId`<sup>Optional</sup> <a name="zoneId" id="arc-cdk.ElastiCacheConfig.property.zoneId"></a>

```typescript
public readonly zoneId: any;
```

- *Type:* any

Route53 DNS Zone ID as list of string (0 or 1 items).

If empty, no custom DNS name will be published.
If the list contains a single Zone ID, a custom DNS name will be pulished in that zone.
Can also be a plain string, but that use is DEPRECATED because of Terraform issues.

---


## Protocols <a name="Protocols" id="Protocols"></a>

### IAcmCertificate <a name="IAcmCertificate" id="arc-cdk.IAcmCertificate"></a>

- *Implemented By:* <a href="#arc-cdk.IAcmCertificate">IAcmCertificate</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#arc-cdk.IAcmCertificate.property.domainName">domainName</a></code> | <code>string</code> | The domain name associated with the certificate. |
| <code><a href="#arc-cdk.IAcmCertificate.property.hostedZoneId">hostedZoneId</a></code> | <code>string</code> | The ID of the hosted zone associated with the domain name. |
| <code><a href="#arc-cdk.IAcmCertificate.property.ttl">ttl</a></code> | <code>number</code> | The time to live (TTL) of the DNS record created for the validation of the certificate. |

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="arc-cdk.IAcmCertificate.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

The domain name associated with the certificate.

---

##### `hostedZoneId`<sup>Required</sup> <a name="hostedZoneId" id="arc-cdk.IAcmCertificate.property.hostedZoneId"></a>

```typescript
public readonly hostedZoneId: string;
```

- *Type:* string

The ID of the hosted zone associated with the domain name.

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="arc-cdk.IAcmCertificate.property.ttl"></a>

```typescript
public readonly ttl: number;
```

- *Type:* number

The time to live (TTL) of the DNS record created for the validation of the certificate.

---

### IApiGatewayCustomDomainName <a name="IApiGatewayCustomDomainName" id="arc-cdk.IApiGatewayCustomDomainName"></a>

- *Implemented By:* <a href="#arc-cdk.IApiGatewayCustomDomainName">IApiGatewayCustomDomainName</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#arc-cdk.IApiGatewayCustomDomainName.property.acmCertificateArn">acmCertificateArn</a></code> | <code>string</code> | The ARN of the ACM certificate for the custom domain. |
| <code><a href="#arc-cdk.IApiGatewayCustomDomainName.property.apiId">apiId</a></code> | <code>string</code> | The ID of the API Gateway API that is associated with the custom domain. |
| <code><a href="#arc-cdk.IApiGatewayCustomDomainName.property.domainName">domainName</a></code> | <code>string</code> | The domain name for the custom domain. |
| <code><a href="#arc-cdk.IApiGatewayCustomDomainName.property.hostedZoneId">hostedZoneId</a></code> | <code>string</code> | The ID of the Route 53 hosted zone that contains the domain record sets for the custom domain. |
| <code><a href="#arc-cdk.IApiGatewayCustomDomainName.property.apiStage">apiStage</a></code> | <code>string</code> | The name of the deployment stage associated with the custom domain (if any). |

---

##### `acmCertificateArn`<sup>Required</sup> <a name="acmCertificateArn" id="arc-cdk.IApiGatewayCustomDomainName.property.acmCertificateArn"></a>

```typescript
public readonly acmCertificateArn: string;
```

- *Type:* string

The ARN of the ACM certificate for the custom domain.

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="arc-cdk.IApiGatewayCustomDomainName.property.apiId"></a>

```typescript
public readonly apiId: string;
```

- *Type:* string

The ID of the API Gateway API that is associated with the custom domain.

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="arc-cdk.IApiGatewayCustomDomainName.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

The domain name for the custom domain.

---

##### `hostedZoneId`<sup>Required</sup> <a name="hostedZoneId" id="arc-cdk.IApiGatewayCustomDomainName.property.hostedZoneId"></a>

```typescript
public readonly hostedZoneId: string;
```

- *Type:* string

The ID of the Route 53 hosted zone that contains the domain record sets for the custom domain.

---

##### `apiStage`<sup>Optional</sup> <a name="apiStage" id="arc-cdk.IApiGatewayCustomDomainName.property.apiStage"></a>

```typescript
public readonly apiStage: string;
```

- *Type:* string

The name of the deployment stage associated with the custom domain (if any).

---

### ICreateEcrImage <a name="ICreateEcrImage" id="arc-cdk.ICreateEcrImage"></a>

- *Implemented By:* <a href="#arc-cdk.ICreateEcrImage">ICreateEcrImage</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#arc-cdk.ICreateEcrImage.property.codePath">codePath</a></code> | <code>string</code> | The path to the directory containing the Dockerfile and application code. |
| <code><a href="#arc-cdk.ICreateEcrImage.property.repositoryUrl">repositoryUrl</a></code> | <code>string</code> | The URL of the ECR repository to which the image will be pushed. |

---

##### `codePath`<sup>Required</sup> <a name="codePath" id="arc-cdk.ICreateEcrImage.property.codePath"></a>

```typescript
public readonly codePath: string;
```

- *Type:* string

The path to the directory containing the Dockerfile and application code.

---

##### `repositoryUrl`<sup>Required</sup> <a name="repositoryUrl" id="arc-cdk.ICreateEcrImage.property.repositoryUrl"></a>

```typescript
public readonly repositoryUrl: string;
```

- *Type:* string

The URL of the ECR repository to which the image will be pushed.

---

### ICreateEcrRepository <a name="ICreateEcrRepository" id="arc-cdk.ICreateEcrRepository"></a>

- *Implemented By:* <a href="#arc-cdk.ICreateEcrRepository">ICreateEcrRepository</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#arc-cdk.ICreateEcrRepository.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | The tags of the resource. |
| <code><a href="#arc-cdk.ICreateEcrRepository.property.environment">environment</a></code> | <code>string</code> | The environment of the resource. |
| <code><a href="#arc-cdk.ICreateEcrRepository.property.name">name</a></code> | <code>string</code> | The name of the resource. |
| <code><a href="#arc-cdk.ICreateEcrRepository.property.namespace">namespace</a></code> | <code>string</code> | The namespace of the resource. |

---

##### `tags`<sup>Optional</sup> <a name="tags" id="arc-cdk.ICreateEcrRepository.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

The tags of the resource.

---

##### `environment`<sup>Required</sup> <a name="environment" id="arc-cdk.ICreateEcrRepository.property.environment"></a>

```typescript
public readonly environment: string;
```

- *Type:* string

The environment of the resource.

---

##### `name`<sup>Required</sup> <a name="name" id="arc-cdk.ICreateEcrRepository.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the resource.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="arc-cdk.ICreateEcrRepository.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

The namespace of the resource.

---

### ICreateLambdaRole <a name="ICreateLambdaRole" id="arc-cdk.ICreateLambdaRole"></a>

- *Implemented By:* <a href="#arc-cdk.ICreateLambdaRole">ICreateLambdaRole</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#arc-cdk.ICreateLambdaRole.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | The tags of the resource. |
| <code><a href="#arc-cdk.ICreateLambdaRole.property.environment">environment</a></code> | <code>string</code> | The environment of the resource. |
| <code><a href="#arc-cdk.ICreateLambdaRole.property.iamPolicy">iamPolicy</a></code> | <code>string</code> | The IAM Policy to be created. |
| <code><a href="#arc-cdk.ICreateLambdaRole.property.iamRole">iamRole</a></code> | <code>string</code> | The IAM Role to be created. |
| <code><a href="#arc-cdk.ICreateLambdaRole.property.name">name</a></code> | <code>string</code> | The name of the resource. |
| <code><a href="#arc-cdk.ICreateLambdaRole.property.namespace">namespace</a></code> | <code>string</code> | The namespace of the resource. |

---

##### `tags`<sup>Optional</sup> <a name="tags" id="arc-cdk.ICreateLambdaRole.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

The tags of the resource.

---

##### `environment`<sup>Required</sup> <a name="environment" id="arc-cdk.ICreateLambdaRole.property.environment"></a>

```typescript
public readonly environment: string;
```

- *Type:* string

The environment of the resource.

---

##### `iamPolicy`<sup>Required</sup> <a name="iamPolicy" id="arc-cdk.ICreateLambdaRole.property.iamPolicy"></a>

```typescript
public readonly iamPolicy: string;
```

- *Type:* string

The IAM Policy to be created.

---

##### `iamRole`<sup>Required</sup> <a name="iamRole" id="arc-cdk.ICreateLambdaRole.property.iamRole"></a>

```typescript
public readonly iamRole: string;
```

- *Type:* string

The IAM Role to be created.

---

##### `name`<sup>Required</sup> <a name="name" id="arc-cdk.ICreateLambdaRole.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the resource.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="arc-cdk.ICreateLambdaRole.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

The namespace of the resource.

---

### ICreateRole <a name="ICreateRole" id="arc-cdk.ICreateRole"></a>

- *Implemented By:* <a href="#arc-cdk.ICreateRole">ICreateRole</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#arc-cdk.ICreateRole.property.iamPolicy">iamPolicy</a></code> | <code>string</code> | The IAM Policy to be created. |
| <code><a href="#arc-cdk.ICreateRole.property.iamRole">iamRole</a></code> | <code>string</code> | The IAM Role to be created. |

---

##### `iamPolicy`<sup>Required</sup> <a name="iamPolicy" id="arc-cdk.ICreateRole.property.iamPolicy"></a>

```typescript
public readonly iamPolicy: string;
```

- *Type:* string

The IAM Policy to be created.

---

##### `iamRole`<sup>Required</sup> <a name="iamRole" id="arc-cdk.ICreateRole.property.iamRole"></a>

```typescript
public readonly iamRole: string;
```

- *Type:* string

The IAM Role to be created.

---

### ICustomDomainName <a name="ICustomDomainName" id="arc-cdk.ICustomDomainName"></a>

- *Implemented By:* <a href="#arc-cdk.ICustomDomainName">ICustomDomainName</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#arc-cdk.ICustomDomainName.property.domainName">domainName</a></code> | <code>string</code> | The domain name to use for the custom domain. |
| <code><a href="#arc-cdk.ICustomDomainName.property.hostedZoneId">hostedZoneId</a></code> | <code>string</code> | The ID of the Amazon Route 53 hosted zone associated with the domain. |
| <code><a href="#arc-cdk.ICustomDomainName.property.acmCertificateArn">acmCertificateArn</a></code> | <code>string</code> | The ARN of the ACM certificate to use for SSL/TLS encryption. |

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="arc-cdk.ICustomDomainName.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

The domain name to use for the custom domain.

---

##### `hostedZoneId`<sup>Required</sup> <a name="hostedZoneId" id="arc-cdk.ICustomDomainName.property.hostedZoneId"></a>

```typescript
public readonly hostedZoneId: string;
```

- *Type:* string

The ID of the Amazon Route 53 hosted zone associated with the domain.

---

##### `acmCertificateArn`<sup>Optional</sup> <a name="acmCertificateArn" id="arc-cdk.ICustomDomainName.property.acmCertificateArn"></a>

```typescript
public readonly acmCertificateArn: string;
```

- *Type:* string

The ARN of the ACM certificate to use for SSL/TLS encryption.

---

### IEnvironmentVars <a name="IEnvironmentVars" id="arc-cdk.IEnvironmentVars"></a>

- *Implemented By:* <a href="#arc-cdk.IEnvironmentVars">IEnvironmentVars</a>



### ILambda <a name="ILambda" id="arc-cdk.ILambda"></a>

- *Implemented By:* <a href="#arc-cdk.ILambda">ILambda</a>, <a href="#arc-cdk.ILambdaWithApiGateway">ILambdaWithApiGateway</a>, <a href="#arc-cdk.ILambdaWithCloudWatchEvent">ILambdaWithCloudWatchEvent</a>, <a href="#arc-cdk.ILambdaWithSns">ILambdaWithSns</a>, <a href="#arc-cdk.ILambdaWithSqs">ILambdaWithSqs</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#arc-cdk.ILambda.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | The tags of the resource. |
| <code><a href="#arc-cdk.ILambda.property.codePath">codePath</a></code> | <code>string</code> | The local path to the directory containing the Lambda function's code. |
| <code><a href="#arc-cdk.ILambda.property.environment">environment</a></code> | <code>string</code> | The environment of the resource. |
| <code><a href="#arc-cdk.ILambda.property.name">name</a></code> | <code>string</code> | The name of the resource. |
| <code><a href="#arc-cdk.ILambda.property.namespace">namespace</a></code> | <code>string</code> | The namespace of the resource. |
| <code><a href="#arc-cdk.ILambda.property.createRole">createRole</a></code> | <code><a href="#arc-cdk.ICreateRole">ICreateRole</a></code> | Configuration for creating a new IAM role to attach to the Lambda function (optional). |
| <code><a href="#arc-cdk.ILambda.property.envVars">envVars</a></code> | <code>{[ key: string ]: string}</code> | The environment variables to set for the Lambda function (optional). |
| <code><a href="#arc-cdk.ILambda.property.invocationData">invocationData</a></code> | <code>string</code> | The data to pass to the Lambda function when it is invoked (optional). |
| <code><a href="#arc-cdk.ILambda.property.layerPath">layerPath</a></code> | <code>string</code> | The local path to the directory containing the Lambda function's layer code (optional). |
| <code><a href="#arc-cdk.ILambda.property.roleArn">roleArn</a></code> | <code>string</code> | The ARN of an existing IAM role to attach to the Lambda function (optional). |
| <code><a href="#arc-cdk.ILambda.property.s3Bucket">s3Bucket</a></code> | <code>string</code> | The S3 bucket to upload the Lambda function's code to (optional). |
| <code><a href="#arc-cdk.ILambda.property.useImage">useImage</a></code> | <code>boolean</code> | Whether to use a Docker image for the Lambda function (optional). |

---

##### `tags`<sup>Optional</sup> <a name="tags" id="arc-cdk.ILambda.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

The tags of the resource.

---

##### `codePath`<sup>Required</sup> <a name="codePath" id="arc-cdk.ILambda.property.codePath"></a>

```typescript
public readonly codePath: string;
```

- *Type:* string

The local path to the directory containing the Lambda function's code.

---

##### `environment`<sup>Required</sup> <a name="environment" id="arc-cdk.ILambda.property.environment"></a>

```typescript
public readonly environment: string;
```

- *Type:* string

The environment of the resource.

---

##### `name`<sup>Required</sup> <a name="name" id="arc-cdk.ILambda.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the resource.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="arc-cdk.ILambda.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

The namespace of the resource.

---

##### `createRole`<sup>Optional</sup> <a name="createRole" id="arc-cdk.ILambda.property.createRole"></a>

```typescript
public readonly createRole: ICreateRole;
```

- *Type:* <a href="#arc-cdk.ICreateRole">ICreateRole</a>

Configuration for creating a new IAM role to attach to the Lambda function (optional).

---

##### `envVars`<sup>Optional</sup> <a name="envVars" id="arc-cdk.ILambda.property.envVars"></a>

```typescript
public readonly envVars: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

The environment variables to set for the Lambda function (optional).

---

##### `invocationData`<sup>Optional</sup> <a name="invocationData" id="arc-cdk.ILambda.property.invocationData"></a>

```typescript
public readonly invocationData: string;
```

- *Type:* string

The data to pass to the Lambda function when it is invoked (optional).

---

##### `layerPath`<sup>Optional</sup> <a name="layerPath" id="arc-cdk.ILambda.property.layerPath"></a>

```typescript
public readonly layerPath: string;
```

- *Type:* string

The local path to the directory containing the Lambda function's layer code (optional).

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="arc-cdk.ILambda.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

The ARN of an existing IAM role to attach to the Lambda function (optional).

---

##### `s3Bucket`<sup>Optional</sup> <a name="s3Bucket" id="arc-cdk.ILambda.property.s3Bucket"></a>

```typescript
public readonly s3Bucket: string;
```

- *Type:* string

The S3 bucket to upload the Lambda function's code to (optional).

---

##### `useImage`<sup>Optional</sup> <a name="useImage" id="arc-cdk.ILambda.property.useImage"></a>

```typescript
public readonly useImage: boolean;
```

- *Type:* boolean

Whether to use a Docker image for the Lambda function (optional).

---

### ILambdaWithApiGateway <a name="ILambdaWithApiGateway" id="arc-cdk.ILambdaWithApiGateway"></a>

- *Extends:* <a href="#arc-cdk.ILambda">ILambda</a>

- *Implemented By:* <a href="#arc-cdk.ILambdaWithApiGateway">ILambdaWithApiGateway</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#arc-cdk.ILambdaWithApiGateway.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | The tags of the resource. |
| <code><a href="#arc-cdk.ILambdaWithApiGateway.property.codePath">codePath</a></code> | <code>string</code> | The local path to the directory containing the Lambda function's code. |
| <code><a href="#arc-cdk.ILambdaWithApiGateway.property.environment">environment</a></code> | <code>string</code> | The environment of the resource. |
| <code><a href="#arc-cdk.ILambdaWithApiGateway.property.name">name</a></code> | <code>string</code> | The name of the resource. |
| <code><a href="#arc-cdk.ILambdaWithApiGateway.property.namespace">namespace</a></code> | <code>string</code> | The namespace of the resource. |
| <code><a href="#arc-cdk.ILambdaWithApiGateway.property.createRole">createRole</a></code> | <code><a href="#arc-cdk.ICreateRole">ICreateRole</a></code> | Configuration for creating a new IAM role to attach to the Lambda function (optional). |
| <code><a href="#arc-cdk.ILambdaWithApiGateway.property.envVars">envVars</a></code> | <code>{[ key: string ]: string}</code> | The environment variables to set for the Lambda function (optional). |
| <code><a href="#arc-cdk.ILambdaWithApiGateway.property.invocationData">invocationData</a></code> | <code>string</code> | The data to pass to the Lambda function when it is invoked (optional). |
| <code><a href="#arc-cdk.ILambdaWithApiGateway.property.layerPath">layerPath</a></code> | <code>string</code> | The local path to the directory containing the Lambda function's layer code (optional). |
| <code><a href="#arc-cdk.ILambdaWithApiGateway.property.roleArn">roleArn</a></code> | <code>string</code> | The ARN of an existing IAM role to attach to the Lambda function (optional). |
| <code><a href="#arc-cdk.ILambdaWithApiGateway.property.s3Bucket">s3Bucket</a></code> | <code>string</code> | The S3 bucket to upload the Lambda function's code to (optional). |
| <code><a href="#arc-cdk.ILambdaWithApiGateway.property.useImage">useImage</a></code> | <code>boolean</code> | Whether to use a Docker image for the Lambda function (optional). |
| <code><a href="#arc-cdk.ILambdaWithApiGateway.property.apiGatewayProtocolType">apiGatewayProtocolType</a></code> | <code>string</code> | The protocol for the API Gateway endpoint (optional). |
| <code><a href="#arc-cdk.ILambdaWithApiGateway.property.customDomainName">customDomainName</a></code> | <code><a href="#arc-cdk.ICustomDomainName">ICustomDomainName</a></code> | Custom domain name for the API Gateway endpoint (optional). |

---

##### `tags`<sup>Optional</sup> <a name="tags" id="arc-cdk.ILambdaWithApiGateway.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

The tags of the resource.

---

##### `codePath`<sup>Required</sup> <a name="codePath" id="arc-cdk.ILambdaWithApiGateway.property.codePath"></a>

```typescript
public readonly codePath: string;
```

- *Type:* string

The local path to the directory containing the Lambda function's code.

---

##### `environment`<sup>Required</sup> <a name="environment" id="arc-cdk.ILambdaWithApiGateway.property.environment"></a>

```typescript
public readonly environment: string;
```

- *Type:* string

The environment of the resource.

---

##### `name`<sup>Required</sup> <a name="name" id="arc-cdk.ILambdaWithApiGateway.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the resource.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="arc-cdk.ILambdaWithApiGateway.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

The namespace of the resource.

---

##### `createRole`<sup>Optional</sup> <a name="createRole" id="arc-cdk.ILambdaWithApiGateway.property.createRole"></a>

```typescript
public readonly createRole: ICreateRole;
```

- *Type:* <a href="#arc-cdk.ICreateRole">ICreateRole</a>

Configuration for creating a new IAM role to attach to the Lambda function (optional).

---

##### `envVars`<sup>Optional</sup> <a name="envVars" id="arc-cdk.ILambdaWithApiGateway.property.envVars"></a>

```typescript
public readonly envVars: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

The environment variables to set for the Lambda function (optional).

---

##### `invocationData`<sup>Optional</sup> <a name="invocationData" id="arc-cdk.ILambdaWithApiGateway.property.invocationData"></a>

```typescript
public readonly invocationData: string;
```

- *Type:* string

The data to pass to the Lambda function when it is invoked (optional).

---

##### `layerPath`<sup>Optional</sup> <a name="layerPath" id="arc-cdk.ILambdaWithApiGateway.property.layerPath"></a>

```typescript
public readonly layerPath: string;
```

- *Type:* string

The local path to the directory containing the Lambda function's layer code (optional).

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="arc-cdk.ILambdaWithApiGateway.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

The ARN of an existing IAM role to attach to the Lambda function (optional).

---

##### `s3Bucket`<sup>Optional</sup> <a name="s3Bucket" id="arc-cdk.ILambdaWithApiGateway.property.s3Bucket"></a>

```typescript
public readonly s3Bucket: string;
```

- *Type:* string

The S3 bucket to upload the Lambda function's code to (optional).

---

##### `useImage`<sup>Optional</sup> <a name="useImage" id="arc-cdk.ILambdaWithApiGateway.property.useImage"></a>

```typescript
public readonly useImage: boolean;
```

- *Type:* boolean

Whether to use a Docker image for the Lambda function (optional).

---

##### `apiGatewayProtocolType`<sup>Optional</sup> <a name="apiGatewayProtocolType" id="arc-cdk.ILambdaWithApiGateway.property.apiGatewayProtocolType"></a>

```typescript
public readonly apiGatewayProtocolType: string;
```

- *Type:* string

The protocol for the API Gateway endpoint (optional).

---

##### `customDomainName`<sup>Optional</sup> <a name="customDomainName" id="arc-cdk.ILambdaWithApiGateway.property.customDomainName"></a>

```typescript
public readonly customDomainName: ICustomDomainName;
```

- *Type:* <a href="#arc-cdk.ICustomDomainName">ICustomDomainName</a>

Custom domain name for the API Gateway endpoint (optional).

---

### ILambdaWithCloudWatchEvent <a name="ILambdaWithCloudWatchEvent" id="arc-cdk.ILambdaWithCloudWatchEvent"></a>

- *Extends:* <a href="#arc-cdk.ILambda">ILambda</a>

- *Implemented By:* <a href="#arc-cdk.ILambdaWithCloudWatchEvent">ILambdaWithCloudWatchEvent</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#arc-cdk.ILambdaWithCloudWatchEvent.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | The tags of the resource. |
| <code><a href="#arc-cdk.ILambdaWithCloudWatchEvent.property.codePath">codePath</a></code> | <code>string</code> | The local path to the directory containing the Lambda function's code. |
| <code><a href="#arc-cdk.ILambdaWithCloudWatchEvent.property.environment">environment</a></code> | <code>string</code> | The environment of the resource. |
| <code><a href="#arc-cdk.ILambdaWithCloudWatchEvent.property.name">name</a></code> | <code>string</code> | The name of the resource. |
| <code><a href="#arc-cdk.ILambdaWithCloudWatchEvent.property.namespace">namespace</a></code> | <code>string</code> | The namespace of the resource. |
| <code><a href="#arc-cdk.ILambdaWithCloudWatchEvent.property.createRole">createRole</a></code> | <code><a href="#arc-cdk.ICreateRole">ICreateRole</a></code> | Configuration for creating a new IAM role to attach to the Lambda function (optional). |
| <code><a href="#arc-cdk.ILambdaWithCloudWatchEvent.property.envVars">envVars</a></code> | <code>{[ key: string ]: string}</code> | The environment variables to set for the Lambda function (optional). |
| <code><a href="#arc-cdk.ILambdaWithCloudWatchEvent.property.invocationData">invocationData</a></code> | <code>string</code> | The data to pass to the Lambda function when it is invoked (optional). |
| <code><a href="#arc-cdk.ILambdaWithCloudWatchEvent.property.layerPath">layerPath</a></code> | <code>string</code> | The local path to the directory containing the Lambda function's layer code (optional). |
| <code><a href="#arc-cdk.ILambdaWithCloudWatchEvent.property.roleArn">roleArn</a></code> | <code>string</code> | The ARN of an existing IAM role to attach to the Lambda function (optional). |
| <code><a href="#arc-cdk.ILambdaWithCloudWatchEvent.property.s3Bucket">s3Bucket</a></code> | <code>string</code> | The S3 bucket to upload the Lambda function's code to (optional). |
| <code><a href="#arc-cdk.ILambdaWithCloudWatchEvent.property.useImage">useImage</a></code> | <code>boolean</code> | Whether to use a Docker image for the Lambda function (optional). |
| <code><a href="#arc-cdk.ILambdaWithCloudWatchEvent.property.scheduleExpression">scheduleExpression</a></code> | <code>string</code> | The schedule expression for the CloudWatch Event. |

---

##### `tags`<sup>Optional</sup> <a name="tags" id="arc-cdk.ILambdaWithCloudWatchEvent.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

The tags of the resource.

---

##### `codePath`<sup>Required</sup> <a name="codePath" id="arc-cdk.ILambdaWithCloudWatchEvent.property.codePath"></a>

```typescript
public readonly codePath: string;
```

- *Type:* string

The local path to the directory containing the Lambda function's code.

---

##### `environment`<sup>Required</sup> <a name="environment" id="arc-cdk.ILambdaWithCloudWatchEvent.property.environment"></a>

```typescript
public readonly environment: string;
```

- *Type:* string

The environment of the resource.

---

##### `name`<sup>Required</sup> <a name="name" id="arc-cdk.ILambdaWithCloudWatchEvent.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the resource.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="arc-cdk.ILambdaWithCloudWatchEvent.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

The namespace of the resource.

---

##### `createRole`<sup>Optional</sup> <a name="createRole" id="arc-cdk.ILambdaWithCloudWatchEvent.property.createRole"></a>

```typescript
public readonly createRole: ICreateRole;
```

- *Type:* <a href="#arc-cdk.ICreateRole">ICreateRole</a>

Configuration for creating a new IAM role to attach to the Lambda function (optional).

---

##### `envVars`<sup>Optional</sup> <a name="envVars" id="arc-cdk.ILambdaWithCloudWatchEvent.property.envVars"></a>

```typescript
public readonly envVars: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

The environment variables to set for the Lambda function (optional).

---

##### `invocationData`<sup>Optional</sup> <a name="invocationData" id="arc-cdk.ILambdaWithCloudWatchEvent.property.invocationData"></a>

```typescript
public readonly invocationData: string;
```

- *Type:* string

The data to pass to the Lambda function when it is invoked (optional).

---

##### `layerPath`<sup>Optional</sup> <a name="layerPath" id="arc-cdk.ILambdaWithCloudWatchEvent.property.layerPath"></a>

```typescript
public readonly layerPath: string;
```

- *Type:* string

The local path to the directory containing the Lambda function's layer code (optional).

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="arc-cdk.ILambdaWithCloudWatchEvent.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

The ARN of an existing IAM role to attach to the Lambda function (optional).

---

##### `s3Bucket`<sup>Optional</sup> <a name="s3Bucket" id="arc-cdk.ILambdaWithCloudWatchEvent.property.s3Bucket"></a>

```typescript
public readonly s3Bucket: string;
```

- *Type:* string

The S3 bucket to upload the Lambda function's code to (optional).

---

##### `useImage`<sup>Optional</sup> <a name="useImage" id="arc-cdk.ILambdaWithCloudWatchEvent.property.useImage"></a>

```typescript
public readonly useImage: boolean;
```

- *Type:* boolean

Whether to use a Docker image for the Lambda function (optional).

---

##### `scheduleExpression`<sup>Required</sup> <a name="scheduleExpression" id="arc-cdk.ILambdaWithCloudWatchEvent.property.scheduleExpression"></a>

```typescript
public readonly scheduleExpression: string;
```

- *Type:* string

The schedule expression for the CloudWatch Event.

---

### ILambdaWithSns <a name="ILambdaWithSns" id="arc-cdk.ILambdaWithSns"></a>

- *Extends:* <a href="#arc-cdk.ILambda">ILambda</a>

- *Implemented By:* <a href="#arc-cdk.ILambdaWithSns">ILambdaWithSns</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#arc-cdk.ILambdaWithSns.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | The tags of the resource. |
| <code><a href="#arc-cdk.ILambdaWithSns.property.codePath">codePath</a></code> | <code>string</code> | The local path to the directory containing the Lambda function's code. |
| <code><a href="#arc-cdk.ILambdaWithSns.property.environment">environment</a></code> | <code>string</code> | The environment of the resource. |
| <code><a href="#arc-cdk.ILambdaWithSns.property.name">name</a></code> | <code>string</code> | The name of the resource. |
| <code><a href="#arc-cdk.ILambdaWithSns.property.namespace">namespace</a></code> | <code>string</code> | The namespace of the resource. |
| <code><a href="#arc-cdk.ILambdaWithSns.property.createRole">createRole</a></code> | <code><a href="#arc-cdk.ICreateRole">ICreateRole</a></code> | Configuration for creating a new IAM role to attach to the Lambda function (optional). |
| <code><a href="#arc-cdk.ILambdaWithSns.property.envVars">envVars</a></code> | <code>{[ key: string ]: string}</code> | The environment variables to set for the Lambda function (optional). |
| <code><a href="#arc-cdk.ILambdaWithSns.property.invocationData">invocationData</a></code> | <code>string</code> | The data to pass to the Lambda function when it is invoked (optional). |
| <code><a href="#arc-cdk.ILambdaWithSns.property.layerPath">layerPath</a></code> | <code>string</code> | The local path to the directory containing the Lambda function's layer code (optional). |
| <code><a href="#arc-cdk.ILambdaWithSns.property.roleArn">roleArn</a></code> | <code>string</code> | The ARN of an existing IAM role to attach to the Lambda function (optional). |
| <code><a href="#arc-cdk.ILambdaWithSns.property.s3Bucket">s3Bucket</a></code> | <code>string</code> | The S3 bucket to upload the Lambda function's code to (optional). |
| <code><a href="#arc-cdk.ILambdaWithSns.property.useImage">useImage</a></code> | <code>boolean</code> | Whether to use a Docker image for the Lambda function (optional). |
| <code><a href="#arc-cdk.ILambdaWithSns.property.kmsMasterKeyId">kmsMasterKeyId</a></code> | <code>string</code> | The AWS KMS key ID for encrypting messages sent to the function. |

---

##### `tags`<sup>Optional</sup> <a name="tags" id="arc-cdk.ILambdaWithSns.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

The tags of the resource.

---

##### `codePath`<sup>Required</sup> <a name="codePath" id="arc-cdk.ILambdaWithSns.property.codePath"></a>

```typescript
public readonly codePath: string;
```

- *Type:* string

The local path to the directory containing the Lambda function's code.

---

##### `environment`<sup>Required</sup> <a name="environment" id="arc-cdk.ILambdaWithSns.property.environment"></a>

```typescript
public readonly environment: string;
```

- *Type:* string

The environment of the resource.

---

##### `name`<sup>Required</sup> <a name="name" id="arc-cdk.ILambdaWithSns.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the resource.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="arc-cdk.ILambdaWithSns.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

The namespace of the resource.

---

##### `createRole`<sup>Optional</sup> <a name="createRole" id="arc-cdk.ILambdaWithSns.property.createRole"></a>

```typescript
public readonly createRole: ICreateRole;
```

- *Type:* <a href="#arc-cdk.ICreateRole">ICreateRole</a>

Configuration for creating a new IAM role to attach to the Lambda function (optional).

---

##### `envVars`<sup>Optional</sup> <a name="envVars" id="arc-cdk.ILambdaWithSns.property.envVars"></a>

```typescript
public readonly envVars: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

The environment variables to set for the Lambda function (optional).

---

##### `invocationData`<sup>Optional</sup> <a name="invocationData" id="arc-cdk.ILambdaWithSns.property.invocationData"></a>

```typescript
public readonly invocationData: string;
```

- *Type:* string

The data to pass to the Lambda function when it is invoked (optional).

---

##### `layerPath`<sup>Optional</sup> <a name="layerPath" id="arc-cdk.ILambdaWithSns.property.layerPath"></a>

```typescript
public readonly layerPath: string;
```

- *Type:* string

The local path to the directory containing the Lambda function's layer code (optional).

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="arc-cdk.ILambdaWithSns.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

The ARN of an existing IAM role to attach to the Lambda function (optional).

---

##### `s3Bucket`<sup>Optional</sup> <a name="s3Bucket" id="arc-cdk.ILambdaWithSns.property.s3Bucket"></a>

```typescript
public readonly s3Bucket: string;
```

- *Type:* string

The S3 bucket to upload the Lambda function's code to (optional).

---

##### `useImage`<sup>Optional</sup> <a name="useImage" id="arc-cdk.ILambdaWithSns.property.useImage"></a>

```typescript
public readonly useImage: boolean;
```

- *Type:* boolean

Whether to use a Docker image for the Lambda function (optional).

---

##### `kmsMasterKeyId`<sup>Required</sup> <a name="kmsMasterKeyId" id="arc-cdk.ILambdaWithSns.property.kmsMasterKeyId"></a>

```typescript
public readonly kmsMasterKeyId: string;
```

- *Type:* string

The AWS KMS key ID for encrypting messages sent to the function.

---

### ILambdaWithSqs <a name="ILambdaWithSqs" id="arc-cdk.ILambdaWithSqs"></a>

- *Extends:* <a href="#arc-cdk.ILambda">ILambda</a>

- *Implemented By:* <a href="#arc-cdk.ILambdaWithSqs">ILambdaWithSqs</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#arc-cdk.ILambdaWithSqs.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | The tags of the resource. |
| <code><a href="#arc-cdk.ILambdaWithSqs.property.codePath">codePath</a></code> | <code>string</code> | The local path to the directory containing the Lambda function's code. |
| <code><a href="#arc-cdk.ILambdaWithSqs.property.environment">environment</a></code> | <code>string</code> | The environment of the resource. |
| <code><a href="#arc-cdk.ILambdaWithSqs.property.name">name</a></code> | <code>string</code> | The name of the resource. |
| <code><a href="#arc-cdk.ILambdaWithSqs.property.namespace">namespace</a></code> | <code>string</code> | The namespace of the resource. |
| <code><a href="#arc-cdk.ILambdaWithSqs.property.createRole">createRole</a></code> | <code><a href="#arc-cdk.ICreateRole">ICreateRole</a></code> | Configuration for creating a new IAM role to attach to the Lambda function (optional). |
| <code><a href="#arc-cdk.ILambdaWithSqs.property.envVars">envVars</a></code> | <code>{[ key: string ]: string}</code> | The environment variables to set for the Lambda function (optional). |
| <code><a href="#arc-cdk.ILambdaWithSqs.property.invocationData">invocationData</a></code> | <code>string</code> | The data to pass to the Lambda function when it is invoked (optional). |
| <code><a href="#arc-cdk.ILambdaWithSqs.property.layerPath">layerPath</a></code> | <code>string</code> | The local path to the directory containing the Lambda function's layer code (optional). |
| <code><a href="#arc-cdk.ILambdaWithSqs.property.roleArn">roleArn</a></code> | <code>string</code> | The ARN of an existing IAM role to attach to the Lambda function (optional). |
| <code><a href="#arc-cdk.ILambdaWithSqs.property.s3Bucket">s3Bucket</a></code> | <code>string</code> | The S3 bucket to upload the Lambda function's code to (optional). |
| <code><a href="#arc-cdk.ILambdaWithSqs.property.useImage">useImage</a></code> | <code>boolean</code> | Whether to use a Docker image for the Lambda function (optional). |
| <code><a href="#arc-cdk.ILambdaWithSqs.property.batchSize">batchSize</a></code> | <code>number</code> | The maximum number of messages to retrieve from the queue during a single request to the Amazon SQS service. |
| <code><a href="#arc-cdk.ILambdaWithSqs.property.delaySeconds">delaySeconds</a></code> | <code>number</code> | The length of time, in seconds, for which the delivery of all messages in the queue is delayed. |
| <code><a href="#arc-cdk.ILambdaWithSqs.property.kmsDataKeyReusePeriodSeconds">kmsDataKeyReusePeriodSeconds</a></code> | <code>number</code> | The length of time, in seconds, for which Amazon SQS can reuse a data key to encrypt or decrypt messages before calling AWS KMS again. |
| <code><a href="#arc-cdk.ILambdaWithSqs.property.kmsMasterKeyId">kmsMasterKeyId</a></code> | <code>string</code> | The ID or ARN of the KMS key that is used to encrypt messages in the queue. |
| <code><a href="#arc-cdk.ILambdaWithSqs.property.maxMessageSize">maxMessageSize</a></code> | <code>number</code> | The maximum size of the message payload that is allowed to be published to the queue, in bytes. |
| <code><a href="#arc-cdk.ILambdaWithSqs.property.maxReceiveCount">maxReceiveCount</a></code> | <code>number</code> | The number of times a message is delivered to the source queue before being moved to the dead-letter queue. |
| <code><a href="#arc-cdk.ILambdaWithSqs.property.messageRetentionSeconds">messageRetentionSeconds</a></code> | <code>number</code> | The length of time, in seconds, for which Amazon SQS retains messages that are not deleted. |
| <code><a href="#arc-cdk.ILambdaWithSqs.property.receiveWaitTimeSeconds">receiveWaitTimeSeconds</a></code> | <code>number</code> | The length of time, in seconds, for which the call waits for a message to arrive in the queue before returning. |

---

##### `tags`<sup>Optional</sup> <a name="tags" id="arc-cdk.ILambdaWithSqs.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

The tags of the resource.

---

##### `codePath`<sup>Required</sup> <a name="codePath" id="arc-cdk.ILambdaWithSqs.property.codePath"></a>

```typescript
public readonly codePath: string;
```

- *Type:* string

The local path to the directory containing the Lambda function's code.

---

##### `environment`<sup>Required</sup> <a name="environment" id="arc-cdk.ILambdaWithSqs.property.environment"></a>

```typescript
public readonly environment: string;
```

- *Type:* string

The environment of the resource.

---

##### `name`<sup>Required</sup> <a name="name" id="arc-cdk.ILambdaWithSqs.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the resource.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="arc-cdk.ILambdaWithSqs.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

The namespace of the resource.

---

##### `createRole`<sup>Optional</sup> <a name="createRole" id="arc-cdk.ILambdaWithSqs.property.createRole"></a>

```typescript
public readonly createRole: ICreateRole;
```

- *Type:* <a href="#arc-cdk.ICreateRole">ICreateRole</a>

Configuration for creating a new IAM role to attach to the Lambda function (optional).

---

##### `envVars`<sup>Optional</sup> <a name="envVars" id="arc-cdk.ILambdaWithSqs.property.envVars"></a>

```typescript
public readonly envVars: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

The environment variables to set for the Lambda function (optional).

---

##### `invocationData`<sup>Optional</sup> <a name="invocationData" id="arc-cdk.ILambdaWithSqs.property.invocationData"></a>

```typescript
public readonly invocationData: string;
```

- *Type:* string

The data to pass to the Lambda function when it is invoked (optional).

---

##### `layerPath`<sup>Optional</sup> <a name="layerPath" id="arc-cdk.ILambdaWithSqs.property.layerPath"></a>

```typescript
public readonly layerPath: string;
```

- *Type:* string

The local path to the directory containing the Lambda function's layer code (optional).

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="arc-cdk.ILambdaWithSqs.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

The ARN of an existing IAM role to attach to the Lambda function (optional).

---

##### `s3Bucket`<sup>Optional</sup> <a name="s3Bucket" id="arc-cdk.ILambdaWithSqs.property.s3Bucket"></a>

```typescript
public readonly s3Bucket: string;
```

- *Type:* string

The S3 bucket to upload the Lambda function's code to (optional).

---

##### `useImage`<sup>Optional</sup> <a name="useImage" id="arc-cdk.ILambdaWithSqs.property.useImage"></a>

```typescript
public readonly useImage: boolean;
```

- *Type:* boolean

Whether to use a Docker image for the Lambda function (optional).

---

##### `batchSize`<sup>Required</sup> <a name="batchSize" id="arc-cdk.ILambdaWithSqs.property.batchSize"></a>

```typescript
public readonly batchSize: number;
```

- *Type:* number

The maximum number of messages to retrieve from the queue during a single request to the Amazon SQS service.

---

##### `delaySeconds`<sup>Required</sup> <a name="delaySeconds" id="arc-cdk.ILambdaWithSqs.property.delaySeconds"></a>

```typescript
public readonly delaySeconds: number;
```

- *Type:* number

The length of time, in seconds, for which the delivery of all messages in the queue is delayed.

Valid values: An integer from 0 to 900 (15 minutes). Default: 0.

---

##### `kmsDataKeyReusePeriodSeconds`<sup>Required</sup> <a name="kmsDataKeyReusePeriodSeconds" id="arc-cdk.ILambdaWithSqs.property.kmsDataKeyReusePeriodSeconds"></a>

```typescript
public readonly kmsDataKeyReusePeriodSeconds: number;
```

- *Type:* number

The length of time, in seconds, for which Amazon SQS can reuse a data key to encrypt or decrypt messages before calling AWS KMS again.

---

##### `kmsMasterKeyId`<sup>Required</sup> <a name="kmsMasterKeyId" id="arc-cdk.ILambdaWithSqs.property.kmsMasterKeyId"></a>

```typescript
public readonly kmsMasterKeyId: string;
```

- *Type:* string

The ID or ARN of the KMS key that is used to encrypt messages in the queue.

---

##### `maxMessageSize`<sup>Required</sup> <a name="maxMessageSize" id="arc-cdk.ILambdaWithSqs.property.maxMessageSize"></a>

```typescript
public readonly maxMessageSize: number;
```

- *Type:* number

The maximum size of the message payload that is allowed to be published to the queue, in bytes.

---

##### `maxReceiveCount`<sup>Required</sup> <a name="maxReceiveCount" id="arc-cdk.ILambdaWithSqs.property.maxReceiveCount"></a>

```typescript
public readonly maxReceiveCount: number;
```

- *Type:* number

The number of times a message is delivered to the source queue before being moved to the dead-letter queue.

Default: 10.

---

##### `messageRetentionSeconds`<sup>Required</sup> <a name="messageRetentionSeconds" id="arc-cdk.ILambdaWithSqs.property.messageRetentionSeconds"></a>

```typescript
public readonly messageRetentionSeconds: number;
```

- *Type:* number

The length of time, in seconds, for which Amazon SQS retains messages that are not deleted.

---

##### `receiveWaitTimeSeconds`<sup>Required</sup> <a name="receiveWaitTimeSeconds" id="arc-cdk.ILambdaWithSqs.property.receiveWaitTimeSeconds"></a>

```typescript
public readonly receiveWaitTimeSeconds: number;
```

- *Type:* number

The length of time, in seconds, for which the call waits for a message to arrive in the queue before returning.

---

