# AWS IAM Tracker

This project collects IAM actions, AWS APIs and managed policies from various public sources.

You can explore the data collected using [the static site](https://glassechidna.github.io/trackiam/).

Collected data is published to the [policies](/policies) and [services](/services) folders in this repo.

Thank you to [alanakirby/aktion](https://github.com/alanakirby/aktion) for originally 
having this idea and being gracious about me shamelessly ripping it off.
	
# Stats

* Unique services: 218
* Unique actions: 7909
* Managed policies: 633

Most common managed policy name prefixes:

| Policy ARN | Count |
| ------ | ----- |
| `arn:aws:iam::aws:policy/AWS*` | 180 |
| `arn:aws:iam::aws:policy/Amazon*` | 169 |
| `arn:aws:iam::aws:policy/aws-service-role/*` | 118 |
| `arn:aws:iam::aws:policy/service-role/*` | 97 |
| `arn:aws:iam::aws:policy/job-function/*` | 7 |
| Other | 62 |

The following table summarises the AWS APIs. 

* The first column is the name of the API as far as IAM policies are concerned. 
* The second column is IAM actions that exactly match the names of invokable 
  APIs exposed by AWS.
* The third column is invokable APIs that don't have a corresponding IAM action.
* The fourth column is IAM actions that don't have a corresponding invokable API.

| Service | Action/API pairs | APIs without actions | Actions without APIs |
| ------ | ----- | ----- | ----- |
| [`ec2`](services/ec2.yml) | 391 | 8 | 0 |
| [`iam`](services/iam.yml) | 140 | 0 | 1 |
| [`sagemaker`](services/sagemaker.yml) | 137 | 2 | 2 |
| [`rds`](services/rds.yml) | 123 | 7 | 1 |
| [`glue`](services/glue.yml) | 123 | 1 | 1 |
| [`ssm`](services/ssm.yml) | 121 | 1 | 7 |
| [`ses`](services/ses.yml) | 103 | 9 | 0 |
| [`mobiletargeting`](services/mobiletargeting.yml) | 102 | 5 | 0 |
| [`lightsail`](services/lightsail.yml) | 101 | 12 | 0 |
| [`cognito-idp`](services/cognito-idp.yml) | 100 | 0 | 0 |
| [`chime`](services/chime.yml) | 94 | 0 | 50 |
| [`greengrass`](services/greengrass.yml) | 90 | 0 | 0 |
| [`redshift`](services/redshift.yml) | 86 | 0 | 18 |
| [`servicecatalog`](services/servicecatalog.yml) | 83 | 0 | 0 |
| [`waf-regional`](services/waf-regional.yml) | 80 | 0 | 0 |
| [`a4b`](services/a4b.yml) | 77 | 16 | 3 |
| [`devicefarm`](services/devicefarm.yml) | 77 | 0 | 0 |
| [`config`](services/config.yml) | 76 | 3 | 2 |
| [`waf`](services/waf.yml) | 76 | 0 | 0 |
| [`gamelift`](services/gamelift.yml) | 76 | 0 | 0 |
| [`codecommit`](services/codecommit.yml) | 75 | 0 | 11 |
| [`opsworks`](services/opsworks.yml) | 73 | 1 | 0 |
| [`storagegateway`](services/storagegateway.yml) | 71 | 4 | 0 |
| [`clouddirectory`](services/clouddirectory.yml) | 62 | 4 | 0 |
| [`ds`](services/ds.yml) | 57 | 0 | 6 |
| [`route53`](services/route53.yml) | 56 | 0 | 0 |
| [`elasticloadbalancing`](services/elasticloadbalancing.yml) | 54 | 0 | 1 |
| [`autoscaling`](services/autoscaling.yml) | 54 | 0 | 0 |
| [`s3`](services/s3.yml) | 53 | 48 | 39 |
| [`directconnect`](services/directconnect.yml) | 53 | 0 | 0 |
| [`comprehend`](services/comprehend.yml) | 51 | 0 | 0 |
| [`guardduty`](services/guardduty.yml) | 49 | 1 | 0 |
| [`quicksight`](services/quicksight.yml) | 47 | 19 | 9 |
| [`lambda`](services/lambda.yml) | 47 | 2 | 3 |
| [`appstream`](services/appstream.yml) | 47 | 0 | 3 |
| [`organizations`](services/organizations.yml) | 47 | 0 | 0 |
| [`backup`](services/backup.yml) | 46 | 0 | 1 |
| [`codedeploy`](services/codedeploy.yml) | 46 | 0 | 0 |
| [`cloudformation`](services/cloudformation.yml) | 45 | 10 | 3 |
| [`dms`](services/dms.yml) | 45 | 2 | 0 |
| [`kms`](services/kms.yml) | 45 | 1 | 2 |
| [`cloudfront`](services/cloudfront.yml) | 45 | 0 | 0 |
| [`ecs`](services/ecs.yml) | 44 | 4 | 2 |
| [`elasticbeanstalk`](services/elasticbeanstalk.yml) | 43 | 1 | 2 |
| [`rekognition`](services/rekognition.yml) | 43 | 0 | 0 |
| [`elasticache`](services/elasticache.yml) | 42 | 6 | 0 |
| [`dynamodb`](services/dynamodb.yml) | 42 | 3 | 6 |
| [`workdocs`](services/workdocs.yml) | 41 | 0 | 10 |
| [`securityhub`](services/securityhub.yml) | 41 | 0 | 0 |
| [`imagebuilder`](services/imagebuilder.yml) | 40 | 2 | 0 |
| [`workmail`](services/workmail.yml) | 40 | 0 | 53 |
| [`robomaker`](services/robomaker.yml) | 40 | 0 | 0 |
| [`personalize`](services/personalize.yml) | 39 | 3 | 0 |
| [`logs`](services/logs.yml) | 39 | 0 | 5 |
| [`mechanicalturk`](services/mechanicalturk.yml) | 39 | 0 | 0 |
| [`medialive`](services/medialive.yml) | 37 | 6 | 0 |
| [`codepipeline`](services/codepipeline.yml) | 37 | 0 | 0 |
| [`appsync`](services/appsync.yml) | 36 | 5 | 1 |
| [`amplify`](services/amplify.yml) | 36 | 1 | 0 |
| [`wafv2`](services/wafv2.yml) | 36 | 0 | 0 |
| [`lex`](services/lex.yml) | 35 | 6 | 0 |
| [`iotthingsgraph`](services/iotthingsgraph.yml) | 35 | 0 | 0 |
| [`swf`](services/swf.yml) | 34 | 3 | 12 |
| [`codebuild`](services/codebuild.yml) | 34 | 0 | 7 |
| [`iotanalytics`](services/iotanalytics.yml) | 33 | 1 | 0 |
| [`sns`](services/sns.yml) | 33 | 0 | 0 |
| [`glacier`](services/glacier.yml) | 33 | 0 | 0 |
| [`workspaces`](services/workspaces.yml) | 32 | 9 | 0 |
| [`inspector`](services/inspector.yml) | 32 | 5 | 0 |
| [`events`](services/events.yml) | 31 | 0 | 0 |
| [`cloudhsm`](services/cloudhsm.yml) | 31 | 0 | 0 |
| [`worklink`](services/worklink.yml) | 30 | 0 | 0 |
| [`frauddetector`](services/frauddetector.yml) | 30 | 0 | 0 |
| [`cloudwatch`](services/cloudwatch.yml) | 29 | 1 | 0 |
| [`connect`](services/connect.yml) | 29 | 0 | 6 |
| [`ecr`](services/ecr.yml) | 29 | 0 | 0 |
| [`appconfig`](services/appconfig.yml) | 29 | 0 | 0 |
| [`cloudsearch`](services/cloudsearch.yml) | 28 | 1 | 4 |
| [`sms`](services/sms.yml) | 28 | 0 | 2 |
| [`appmesh`](services/appmesh.yml) | 28 | 0 | 1 |
| [`networkmanager`](services/networkmanager.yml) | 28 | 0 | 0 |
| [`machinelearning`](services/machinelearning.yml) | 28 | 0 | 0 |
| [`elasticmapreduce`](services/elasticmapreduce.yml) | 27 | 3 | 8 |
| [`schemas`](services/schemas.yml) | 27 | 2 | 0 |
| [`datasync`](services/datasync.yml) | 27 | 2 | 0 |
| [`forecast`](services/forecast.yml) | 27 | 0 | 0 |
| [`kinesis`](services/kinesis.yml) | 26 | 2 | 0 |
| [`kinesisvideo`](services/kinesisvideo.yml) | 26 | 0 | 3 |
| [`kinesisanalytics`](services/kinesisanalytics.yml) | 26 | 0 | 1 |
| [`iot1click`](services/iot1click.yml) | 26 | 0 | 0 |
| [`mediaconvert`](services/mediaconvert.yml) | 25 | 0 | 0 |
| [`groundstation`](services/groundstation.yml) | 25 | 0 | 0 |
| [`globalaccelerator`](services/globalaccelerator.yml) | 25 | 0 | 0 |
| [`discovery`](services/discovery.yml) | 25 | 0 | 0 |
| [`route53domains`](services/route53domains.yml) | 23 | 1 | 0 |
| [`elasticfilesystem`](services/elasticfilesystem.yml) | 23 | 0 | 5 |
| [`mediastore`](services/mediastore.yml) | 23 | 0 | 0 |
| [`ram`](services/ram.yml) | 22 | 1 | 0 |
| [`states`](services/states.yml) | 22 | 0 | 0 |
| [`route53resolver`](services/route53resolver.yml) | 22 | 0 | 0 |
| [`mq`](services/mq.yml) | 22 | 0 | 0 |
| [`dataexchange`](services/dataexchange.yml) | 22 | 0 | 0 |
| [`es`](services/es.yml) | 21 | 2 | 6 |
| [`dax`](services/dax.yml) | 21 | 0 | 9 |
| [`eks`](services/eks.yml) | 21 | 0 | 0 |
| [`cognito-identity`](services/cognito-identity.yml) | 21 | 0 | 0 |
| [`iotevents`](services/iotevents.yml) | 20 | 0 | 1 |
| [`xray`](services/xray.yml) | 20 | 0 | 0 |
| [`sqs`](services/sqs.yml) | 20 | 0 | 0 |
| [`servicediscovery`](services/servicediscovery.yml) | 20 | 0 | 0 |
| [`kendra`](services/kendra.yml) | 20 | 0 | 0 |
| [`acm-pca`](services/acm-pca.yml) | 20 | 0 | 0 |
| [`mgh`](services/mgh.yml) | 19 | 1 | 0 |
| [`athena`](services/athena.yml) | 19 | 0 | 11 |
| [`datapipeline`](services/datapipeline.yml) | 19 | 0 | 2 |
| [`ce`](services/ce.yml) | 19 | 0 | 0 |
| [`shield`](services/shield.yml) | 18 | 2 | 0 |
| [`codestar`](services/codestar.yml) | 18 | 0 | 3 |
| [`transfer`](services/transfer.yml) | 18 | 0 | 0 |
| [`secretsmanager`](services/secretsmanager.yml) | 18 | 0 | 0 |
| [`managedblockchain`](services/managedblockchain.yml) | 18 | 0 | 0 |
| [`cloudtrail`](services/cloudtrail.yml) | 18 | 0 | 0 |
| [`access-analyzer`](services/access-analyzer.yml) | 18 | 0 | 0 |
| [`applicationinsights`](services/applicationinsights.yml) | 17 | 10 | 0 |
| [`kafka`](services/kafka.yml) | 17 | 4 | 0 |
| [`snowball`](services/snowball.yml) | 17 | 2 | 0 |
| [`cognito-sync`](services/cognito-sync.yml) | 17 | 0 | 2 |
| [`fms`](services/fms.yml) | 17 | 0 | 0 |
| [`elastictranscoder`](services/elastictranscoder.yml) | 17 | 0 | 0 |
| [`qldb`](services/qldb.yml) | 16 | 0 | 3 |
| [`servicequotas`](services/servicequotas.yml) | 16 | 0 | 0 |
| [`batch`](services/batch.yml) | 16 | 0 | 0 |
| [`opsworks-cm`](services/opsworks-cm.yml) | 15 | 4 | 0 |
| [`license-manager`](services/license-manager.yml) | 15 | 1 | 0 |
| [`transcribe`](services/transcribe.yml) | 15 | 0 | 0 |
| [`mediapackage`](services/mediapackage.yml) | 14 | 4 | 0 |
| [`mediaconnect`](services/mediaconnect.yml) | 14 | 3 | 0 |
| [`support`](services/support.yml) | 14 | 0 | 8 |
| [`fsx`](services/fsx.yml) | 14 | 0 | 0 |
| [`cloud9`](services/cloud9.yml) | 13 | 0 | 2 |
| [`serverlessrepo`](services/serverlessrepo.yml) | 13 | 0 | 1 |
| [`lakeformation`](services/lakeformation.yml) | 13 | 0 | 1 |
| [`health`](services/health.yml) | 13 | 0 | 0 |
| [`codestar-notifications`](services/codestar-notifications.yml) | 13 | 0 | 0 |
| [`acm`](services/acm.yml) | 13 | 0 | 0 |
| [`signer`](services/signer.yml) | 12 | 0 | 0 |
| [`resource-groups`](services/resource-groups.yml) | 12 | 0 | 0 |
| [`mediapackage-vod`](services/mediapackage-vod.yml) | 12 | 0 | 0 |
| [`firehose`](services/firehose.yml) | 12 | 0 | 0 |
| [`aws-marketplace`](services/aws-marketplace.yml) | 11 | 0 | 32 |
| [`detective`](services/detective.yml) | 11 | 0 | 5 |
| [`sdb`](services/sdb.yml) | 10 | 0 | 0 |
| [`application-autoscaling`](services/application-autoscaling.yml) | 10 | 0 | 0 |
| [`codeguru-profiler`](services/codeguru-profiler.yml) | 9 | 0 | 3 |
| [`translate`](services/translate.yml) | 9 | 0 | 0 |
| [`polly`](services/polly.yml) | 9 | 0 | 0 |
| [`mobilehub`](services/mobilehub.yml) | 8 | 1 | 15 |
| [`iot`](services/iot.yml) | 8 | 0 | 185 |
| [`sts`](services/sts.yml) | 8 | 0 | 1 |
| [`tag`](services/tag.yml) | 8 | 0 | 0 |
| [`sms-voice`](services/sms-voice.yml) | 8 | 0 | 0 |
| [`savingsplans`](services/savingsplans.yml) | 8 | 0 | 0 |
| [`dlm`](services/dlm.yml) | 8 | 0 | 0 |
| [`mediatailor`](services/mediatailor.yml) | 7 | 0 | 0 |
| [`macie`](services/macie.yml) | 7 | 0 | 0 |
| [`textract`](services/textract.yml) | 6 | 0 | 0 |
| [`rds-data`](services/rds-data.yml) | 6 | 0 | 0 |
| [`importexport`](services/importexport.yml) | 6 | 0 | 0 |
| [`compute-optimizer`](services/compute-optimizer.yml) | 6 | 0 | 0 |
| [`autoscaling-plans`](services/autoscaling-plans.yml) | 6 | 0 | 0 |
| [`outposts`](services/outposts.yml) | 5 | 2 | 0 |
| [`codeguru-reviewer`](services/codeguru-reviewer.yml) | 4 | 0 | 3 |
| [`cur`](services/cur.yml) | 4 | 0 | 0 |
| [`pricing`](services/pricing.yml) | 3 | 0 | 0 |
| [`ebs`](services/ebs.yml) | 3 | 0 | 0 |
| [`comprehendmedical`](services/comprehendmedical.yml) | 2 | 11 | 0 |
| [`pi`](services/pi.yml) | 2 | 0 | 0 |
| [`mobileanalytics`](services/mobileanalytics.yml) | 1 | 0 | 2 |
| [`workmailmessageflow`](services/workmailmessageflow.yml) | 1 | 0 | 0 |
| [`ec2-instance-connect`](services/ec2-instance-connect.yml) | 1 | 0 | 0 |
| [`execute-api`](services/execute-api.yml) | 0 | 209 | 3 |
| [`apigateway`](services/apigateway.yml) | 0 | 148 | 7 |
| [`budgets`](services/budgets.yml) | 0 | 14 | 2 |
| [`IoTSecuredTunneling`](services/IoTSecuredTunneling.yml) | 0 | 7 | 0 |
| [`codestar-connections`](services/codestar-connections.yml) | 0 | 4 | 0 |
| [`awsssoportal`](services/awsssoportal.yml) | 0 | 4 | 0 |
| [`elastic-inference`](services/elastic-inference.yml) | 0 | 3 | 1 |
| [`awsssooidc`](services/awsssooidc.yml) | 0 | 3 | 0 |
| [`marketplacecommerceanalytics`](services/marketplacecommerceanalytics.yml) | 0 | 2 | 0 |
| [`iotsitewise`](services/iotsitewise.yml) | 0 | 0 | 77 |
| [`sso`](services/sso.yml) | 0 | 0 | 53 |
| [`sso-directory`](services/sso-directory.yml) | 0 | 0 | 37 |
| [`deepracer`](services/deepracer.yml) | 0 | 0 | 26 |
| [`appmesh-preview`](services/appmesh-preview.yml) | 0 | 0 | 26 |
| [`deeplens`](services/deeplens.yml) | 0 | 0 | 24 |
| [`trustedadvisor`](services/trustedadvisor.yml) | 0 | 0 | 12 |
| [`chatbot`](services/chatbot.yml) | 0 | 0 | 12 |
| [`freertos`](services/freertos.yml) | 0 | 0 | 11 |
| [`synthetics`](services/synthetics.yml) | 0 | 0 | 9 |
| [`dbqms`](services/dbqms.yml) | 0 | 0 | 9 |
| [`launchwizard`](services/launchwizard.yml) | 0 | 0 | 8 |
| [`aws-portal`](services/aws-portal.yml) | 0 | 0 | 7 |
| [`ec2messages`](services/ec2messages.yml) | 0 | 0 | 6 |
| [`wellarchitected`](services/wellarchitected.yml) | 0 | 0 | 5 |
| [`cassandra`](services/cassandra.yml) | 0 | 0 | 5 |
| [`aws-marketplace-management`](services/aws-marketplace-management.yml) | 0 | 0 | 5 |
| [`ssmmessages`](services/ssmmessages.yml) | 0 | 0 | 4 |
| [`groundtruthlabeling`](services/groundtruthlabeling.yml) | 0 | 0 | 4 |
| [`artifact`](services/artifact.yml) | 0 | 0 | 4 |
| [`awsconnector`](services/awsconnector.yml) | 0 | 0 | 3 |
| [`account`](services/account.yml) | 0 | 0 | 3 |
| [`sumerian`](services/sumerian.yml) | 0 | 0 | 2 |
| [`wam`](services/wam.yml) | 0 | 0 | 1 |
| [`rds-db`](services/rds-db.yml) | 0 | 0 | 1 |
| [`neptune-db`](services/neptune-db.yml) | 0 | 0 | 1 |
| [`iot-device-tester`](services/iot-device-tester.yml) | 0 | 0 | 1 |
| [`backup-storage`](services/backup-storage.yml) | 0 | 0 | 1 |
| [`arsenal`](services/arsenal.yml) | 0 | 0 | 1 |

Most common action prefixes:

| Prefix | Count |
| ------ | ----- |
| `List` | 1080 |
| `Get` | 1053 |
| `Describe` | 1004 |
| `Delete` | 926 |
| `Create` | 856 |
| `Update` | 643 |
| `Put` | 220 |
| `Start` | 137 |
| `Modify` | 104 |
| `Tag` | 102 |

