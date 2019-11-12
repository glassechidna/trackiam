# AWS IAM by the numbers

Changes (i.e. new IAM actions, new AWS APIs, new managed policies, modifications, etc)
are published to a public SNS topic: `arn:aws:sns:us-east-1:258739955926:trackiam`

* Unique services: 194
* Unique actions: 6899
* Managed policies: 572

Most common managed policy name prefixes:

| Policy ARN | Count |
| ------ | ----- |
| `arn:aws:iam::aws:policy/AWS*` | 166 |
| `arn:aws:iam::aws:policy/Amazon*` | 147 |
| `arn:aws:iam::aws:policy/aws-service-role/*` | 99 |
| `arn:aws:iam::aws:policy/service-role/*` | 96 |
| `arn:aws:iam::aws:policy/job-function/*` | 7 |
| Other | 57 |

The following table summarises the AWS APIs. 

* The first column is the name of the API as far as IAM policies are concerned. 
* The second column is IAM actions that exactly match the names of invokable 
  APIs exposed by AWS.
* The third column is invokable APIs that don't have a corresponding IAM action.
* The fourth column is IAM actions that don't have a corresponding invokable API.

| Service | Action/API pairs | APIs without actions | Actions without APIs |
| ------ | ----- | ----- | ----- |
| [`ec2`](services/ec2.yml) | 354 | 5 | 0 |
| [`iam`](services/iam.yml) | 140 | 0 | 1 |
| [`glue`](services/glue.yml) | 123 | 0 | 1 |
| [`ssm`](services/ssm.yml) | 120 | 0 | 8 |
| [`rds`](services/rds.yml) | 111 | 6 | 1 |
| [`ses`](services/ses.yml) | 103 | 2 | 0 |
| [`lightsail`](services/lightsail.yml) | 101 | 4 | 0 |
| [`cognito-idp`](services/cognito-idp.yml) | 100 | 0 | 0 |
| [`greengrass`](services/greengrass.yml) | 90 | 0 | 0 |
| [`mobiletargeting`](services/mobiletargeting.yml) | 83 | 18 | 0 |
| [`servicecatalog`](services/servicecatalog.yml) | 83 | 0 | 0 |
| [`redshift`](services/redshift.yml) | 82 | 0 | 18 |
| [`waf-regional`](services/waf-regional.yml) | 80 | 0 | 0 |
| [`a4b`](services/a4b.yml) | 77 | 16 | 3 |
| [`waf`](services/waf.yml) | 76 | 0 | 0 |
| [`sagemaker`](services/sagemaker.yml) | 76 | 0 | 0 |
| [`opsworks`](services/opsworks.yml) | 73 | 1 | 0 |
| [`gamelift`](services/gamelift.yml) | 73 | 0 | 0 |
| [`chime`](services/chime.yml) | 72 | 0 | 49 |
| [`storagegateway`](services/storagegateway.yml) | 71 | 2 | 0 |
| [`devicefarm`](services/devicefarm.yml) | 67 | 0 | 0 |
| [`clouddirectory`](services/clouddirectory.yml) | 62 | 4 | 0 |
| [`config`](services/config.yml) | 56 | 8 | 2 |
| [`route53`](services/route53.yml) | 56 | 0 | 0 |
| [`codecommit`](services/codecommit.yml) | 54 | 0 | 11 |
| [`elasticloadbalancing`](services/elasticloadbalancing.yml) | 54 | 0 | 1 |
| [`autoscaling`](services/autoscaling.yml) | 54 | 0 | 0 |
| [`directconnect`](services/directconnect.yml) | 53 | 0 | 0 |
| [`ds`](services/ds.yml) | 49 | 1 | 6 |
| [`appstream`](services/appstream.yml) | 47 | 0 | 3 |
| [`organizations`](services/organizations.yml) | 46 | 0 | 0 |
| [`s3`](services/s3.yml) | 45 | 48 | 39 |
| [`dms`](services/dms.yml) | 45 | 2 | 0 |
| [`cloudformation`](services/cloudformation.yml) | 45 | 0 | 3 |
| [`guardduty`](services/guardduty.yml) | 45 | 0 | 0 |
| [`comprehend`](services/comprehend.yml) | 45 | 0 | 0 |
| [`cloudfront`](services/cloudfront.yml) | 45 | 0 | 0 |
| [`ecs`](services/ecs.yml) | 44 | 1 | 2 |
| [`elasticbeanstalk`](services/elasticbeanstalk.yml) | 43 | 1 | 2 |
| [`backup`](services/backup.yml) | 43 | 0 | 0 |
| [`elasticache`](services/elasticache.yml) | 42 | 6 | 0 |
| [`workdocs`](services/workdocs.yml) | 41 | 0 | 10 |
| [`kms`](services/kms.yml) | 40 | 1 | 2 |
| [`logs`](services/logs.yml) | 39 | 0 | 5 |
| [`personalize`](services/personalize.yml) | 39 | 0 | 0 |
| [`mechanicalturk`](services/mechanicalturk.yml) | 39 | 0 | 0 |
| [`securityhub`](services/securityhub.yml) | 38 | 0 | 0 |
| [`codedeploy`](services/codedeploy.yml) | 37 | 9 | 0 |
| [`dynamodb`](services/dynamodb.yml) | 37 | 3 | 4 |
| [`lambda`](services/lambda.yml) | 37 | 2 | 2 |
| [`appsync`](services/appsync.yml) | 36 | 0 | 1 |
| [`robomaker`](services/robomaker.yml) | 36 | 0 | 0 |
| [`codepipeline`](services/codepipeline.yml) | 36 | 0 | 0 |
| [`lex`](services/lex.yml) | 35 | 6 | 0 |
| [`iotthingsgraph`](services/iotthingsgraph.yml) | 35 | 0 | 0 |
| [`swf`](services/swf.yml) | 34 | 3 | 12 |
| [`rekognition`](services/rekognition.yml) | 34 | 0 | 0 |
| [`iotanalytics`](services/iotanalytics.yml) | 33 | 1 | 0 |
| [`workmail`](services/workmail.yml) | 33 | 0 | 53 |
| [`sns`](services/sns.yml) | 33 | 0 | 0 |
| [`glacier`](services/glacier.yml) | 33 | 0 | 0 |
| [`inspector`](services/inspector.yml) | 32 | 5 | 0 |
| [`workspaces`](services/workspaces.yml) | 32 | 3 | 0 |
| [`events`](services/events.yml) | 31 | 0 | 0 |
| [`medialive`](services/medialive.yml) | 30 | 1 | 0 |
| [`worklink`](services/worklink.yml) | 30 | 0 | 0 |
| [`amplify`](services/amplify.yml) | 29 | 4 | 0 |
| [`ecr`](services/ecr.yml) | 29 | 0 | 0 |
| [`cloudhsm`](services/cloudhsm.yml) | 28 | 3 | 0 |
| [`sms`](services/sms.yml) | 28 | 0 | 2 |
| [`appmesh`](services/appmesh.yml) | 28 | 0 | 1 |
| [`machinelearning`](services/machinelearning.yml) | 28 | 0 | 0 |
| [`elasticmapreduce`](services/elasticmapreduce.yml) | 27 | 2 | 8 |
| [`forecast`](services/forecast.yml) | 27 | 0 | 0 |
| [`datasync`](services/datasync.yml) | 27 | 0 | 0 |
| [`kinesis`](services/kinesis.yml) | 26 | 2 | 0 |
| [`cloudsearch`](services/cloudsearch.yml) | 26 | 1 | 4 |
| [`iot1click`](services/iot1click.yml) | 26 | 0 | 0 |
| [`mediaconvert`](services/mediaconvert.yml) | 25 | 0 | 0 |
| [`groundstation`](services/groundstation.yml) | 25 | 0 | 0 |
| [`discovery`](services/discovery.yml) | 25 | 0 | 0 |
| [`kinesisanalytics`](services/kinesisanalytics.yml) | 24 | 0 | 0 |
| [`route53domains`](services/route53domains.yml) | 23 | 1 | 0 |
| [`cloudwatch`](services/cloudwatch.yml) | 23 | 0 | 0 |
| [`states`](services/states.yml) | 22 | 0 | 0 |
| [`route53resolver`](services/route53resolver.yml) | 22 | 0 | 0 |
| [`mq`](services/mq.yml) | 22 | 0 | 0 |
| [`es`](services/es.yml) | 21 | 2 | 5 |
| [`dax`](services/dax.yml) | 21 | 0 | 9 |
| [`cognito-identity`](services/cognito-identity.yml) | 21 | 0 | 0 |
| [`mediastore`](services/mediastore.yml) | 20 | 3 | 0 |
| [`iotevents`](services/iotevents.yml) | 20 | 0 | 1 |
| [`xray`](services/xray.yml) | 20 | 0 | 0 |
| [`sqs`](services/sqs.yml) | 20 | 0 | 0 |
| [`servicediscovery`](services/servicediscovery.yml) | 20 | 0 | 0 |
| [`acm-pca`](services/acm-pca.yml) | 20 | 0 | 0 |
| [`athena`](services/athena.yml) | 19 | 0 | 11 |
| [`codebuild`](services/codebuild.yml) | 19 | 0 | 4 |
| [`datapipeline`](services/datapipeline.yml) | 19 | 0 | 2 |
| [`codestar`](services/codestar.yml) | 18 | 0 | 3 |
| [`transfer`](services/transfer.yml) | 18 | 0 | 0 |
| [`secretsmanager`](services/secretsmanager.yml) | 18 | 0 | 0 |
| [`managedblockchain`](services/managedblockchain.yml) | 18 | 0 | 0 |
| [`snowball`](services/snowball.yml) | 17 | 2 | 0 |
| [`kafka`](services/kafka.yml) | 17 | 2 | 0 |
| [`shield`](services/shield.yml) | 17 | 1 | 0 |
| [`cognito-sync`](services/cognito-sync.yml) | 17 | 0 | 2 |
| [`ram`](services/ram.yml) | 17 | 0 | 0 |
| [`globalaccelerator`](services/globalaccelerator.yml) | 17 | 0 | 0 |
| [`elastictranscoder`](services/elastictranscoder.yml) | 17 | 0 | 0 |
| [`applicationinsights`](services/applicationinsights.yml) | 17 | 0 | 0 |
| [`quicksight`](services/quicksight.yml) | 16 | 0 | 8 |
| [`qldb`](services/qldb.yml) | 16 | 0 | 3 |
| [`mgh`](services/mgh.yml) | 16 | 0 | 1 |
| [`servicequotas`](services/servicequotas.yml) | 16 | 0 | 0 |
| [`cloudtrail`](services/cloudtrail.yml) | 16 | 0 | 0 |
| [`batch`](services/batch.yml) | 16 | 0 | 0 |
| [`opsworks-cm`](services/opsworks-cm.yml) | 15 | 1 | 0 |
| [`kinesisvideo`](services/kinesisvideo.yml) | 15 | 0 | 1 |
| [`license-manager`](services/license-manager.yml) | 15 | 0 | 0 |
| [`mediapackage`](services/mediapackage.yml) | 14 | 4 | 0 |
| [`mediaconnect`](services/mediaconnect.yml) | 14 | 3 | 0 |
| [`elasticfilesystem`](services/elasticfilesystem.yml) | 14 | 0 | 2 |
| [`fms`](services/fms.yml) | 14 | 0 | 0 |
| [`ce`](services/ce.yml) | 13 | 1 | 0 |
| [`serverlessrepo`](services/serverlessrepo.yml) | 13 | 0 | 1 |
| [`lakeformation`](services/lakeformation.yml) | 13 | 0 | 1 |
| [`codestar-notifications`](services/codestar-notifications.yml) | 13 | 0 | 0 |
| [`acm`](services/acm.yml) | 13 | 0 | 0 |
| [`resource-groups`](services/resource-groups.yml) | 12 | 0 | 0 |
| [`mediapackage-vod`](services/mediapackage-vod.yml) | 12 | 0 | 0 |
| [`firehose`](services/firehose.yml) | 12 | 0 | 0 |
| [`aws-marketplace`](services/aws-marketplace.yml) | 11 | 0 | 23 |
| [`fsx`](services/fsx.yml) | 11 | 0 | 0 |
| [`eks`](services/eks.yml) | 11 | 0 | 0 |
| [`sdb`](services/sdb.yml) | 10 | 0 | 0 |
| [`cloud9`](services/cloud9.yml) | 10 | 0 | 0 |
| [`application-autoscaling`](services/application-autoscaling.yml) | 10 | 0 | 0 |
| [`connect`](services/connect.yml) | 9 | 16 | 6 |
| [`signer`](services/signer.yml) | 9 | 3 | 0 |
| [`transcribe`](services/transcribe.yml) | 9 | 0 | 1 |
| [`polly`](services/polly.yml) | 9 | 0 | 0 |
| [`mobilehub`](services/mobilehub.yml) | 8 | 1 | 15 |
| [`iot`](services/iot.yml) | 8 | 0 | 169 |
| [`sts`](services/sts.yml) | 8 | 0 | 0 |
| [`sms-voice`](services/sms-voice.yml) | 8 | 0 | 0 |
| [`savingsplans`](services/savingsplans.yml) | 8 | 0 | 0 |
| [`mediatailor`](services/mediatailor.yml) | 7 | 0 | 0 |
| [`macie`](services/macie.yml) | 7 | 0 | 0 |
| [`textract`](services/textract.yml) | 6 | 0 | 0 |
| [`importexport`](services/importexport.yml) | 6 | 0 | 0 |
| [`health`](services/health.yml) | 6 | 0 | 0 |
| [`autoscaling-plans`](services/autoscaling-plans.yml) | 6 | 0 | 0 |
| [`rds-data`](services/rds-data.yml) | 5 | 1 | 0 |
| [`translate`](services/translate.yml) | 5 | 0 | 0 |
| [`tag`](services/tag.yml) | 5 | 0 | 0 |
| [`dlm`](services/dlm.yml) | 5 | 0 | 0 |
| [`cur`](services/cur.yml) | 4 | 0 | 0 |
| [`pricing`](services/pricing.yml) | 3 | 0 | 0 |
| [`comprehendmedical`](services/comprehendmedical.yml) | 2 | 9 | 0 |
| [`pi`](services/pi.yml) | 2 | 0 | 0 |
| [`mobileanalytics`](services/mobileanalytics.yml) | 1 | 0 | 2 |
| [`workmailmessageflow`](services/workmailmessageflow.yml) | 1 | 0 | 0 |
| [`ec2-instance-connect`](services/ec2-instance-connect.yml) | 1 | 0 | 0 |
| [`execute-api`](services/execute-api.yml) | 0 | 181 | 3 |
| [`apigateway`](services/apigateway.yml) | 0 | 144 | 7 |
| [`budgets`](services/budgets.yml) | 0 | 14 | 2 |
| [`support`](services/support.yml) | 0 | 14 | 0 |
| [`awsssoportal`](services/awsssoportal.yml) | 0 | 4 | 0 |
| [`awsssooidc`](services/awsssooidc.yml) | 0 | 3 | 0 |
| [`marketplacecommerceanalytics`](services/marketplacecommerceanalytics.yml) | 0 | 2 | 0 |
| [`sso`](services/sso.yml) | 0 | 0 | 67 |
| [`iotsitewise`](services/iotsitewise.yml) | 0 | 0 | 46 |
| [`deepracer`](services/deepracer.yml) | 0 | 0 | 26 |
| [`sso-directory`](services/sso-directory.yml) | 0 | 0 | 24 |
| [`deeplens`](services/deeplens.yml) | 0 | 0 | 24 |
| [`trustedadvisor`](services/trustedadvisor.yml) | 0 | 0 | 12 |
| [`chatbot`](services/chatbot.yml) | 0 | 0 | 12 |
| [`freertos`](services/freertos.yml) | 0 | 0 | 11 |
| [`dbqms`](services/dbqms.yml) | 0 | 0 | 9 |
| [`aws-portal`](services/aws-portal.yml) | 0 | 0 | 7 |
| [`ec2messages`](services/ec2messages.yml) | 0 | 0 | 6 |
| [`aws-marketplace-management`](services/aws-marketplace-management.yml) | 0 | 0 | 5 |
| [`wellarchitected`](services/wellarchitected.yml) | 0 | 0 | 4 |
| [`ssmmessages`](services/ssmmessages.yml) | 0 | 0 | 4 |
| [`groundtruthlabeling`](services/groundtruthlabeling.yml) | 0 | 0 | 4 |
| [`artifact`](services/artifact.yml) | 0 | 0 | 4 |
| [`account`](services/account.yml) | 0 | 0 | 3 |
| [`sumerian`](services/sumerian.yml) | 0 | 0 | 2 |
| [`wam`](services/wam.yml) | 0 | 0 | 1 |
| [`rds-db`](services/rds-db.yml) | 0 | 0 | 1 |
| [`neptune-db`](services/neptune-db.yml) | 0 | 0 | 1 |
| [`elastic-inference`](services/elastic-inference.yml) | 0 | 0 | 1 |
| [`backup-storage`](services/backup-storage.yml) | 0 | 0 | 1 |

Most common action prefixes:

| Prefix | Count |
| ------ | ----- |
| `Get` | 927 |
| `List` | 912 |
| `Describe` | 879 |
| `Delete` | 807 |
| `Create` | 734 |
| `Update` | 545 |
| `Put` | 191 |
| `Start` | 116 |
| `Modify` | 93 |
| `Untag` | 80 |

Thank you to [alanakirby/aktion](https://github.com/alanakirby/aktion) for originally 
having this idea and being gracious about me shamelessly ripping it off.
