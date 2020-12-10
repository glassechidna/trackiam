# AWS IAM Tracker

This project collects IAM actions, AWS APIs and managed policies from various public sources.

You can explore the data collected using [the static site](https://glassechidna.github.io/trackiam/).

Collected data is published to the [policies](/policies) and [services](/services) folders in this repo.

Thank you to [alanakirby/aktion](https://github.com/alanakirby/aktion) for originally 
having this idea and being gracious about me shamelessly ripping it off.
	
# Stats

* Unique services: 254
* Unique actions: 9740
* Managed policies: 765

Most common managed policy name prefixes:

| Policy ARN | Count |
| ------ | ----- |
| `arn:aws:iam::aws:policy/AWS*` | 214 |
| `arn:aws:iam::aws:policy/Amazon*` | 203 |
| `arn:aws:iam::aws:policy/aws-service-role/*` | 144 |
| `arn:aws:iam::aws:policy/service-role/*` | 119 |
| `arn:aws:iam::aws:policy/job-function/*` | 7 |
| Other | 78 |

The following table summarises the AWS APIs. 

* The first column is the name of the API as far as IAM policies are concerned. 
* The second column is IAM actions that exactly match the names of invokable 
  APIs exposed by AWS.
* The third column is invokable APIs that don't have a corresponding IAM action.
* The fourth column is IAM actions that don't have a corresponding invokable API.

| Service | Action/API pairs | APIs without actions | Actions without APIs |
| ------ | ----- | ----- | ----- |
| [`ec2`](services/ec2.yml) | 417 | 6 | 0 |
| [`sagemaker`](services/sagemaker.yml) | 243 | 1 | 2 |
| [`glue`](services/glue.yml) | 144 | 13 | 1 |
| [`iam`](services/iam.yml) | 140 | 0 | 1 |
| [`chime`](services/chime.yml) | 133 | 48 | 50 |
| [`ssm`](services/ssm.yml) | 127 | 0 | 7 |
| [`rds`](services/rds.yml) | 123 | 9 | 1 |
| [`mobiletargeting`](services/mobiletargeting.yml) | 107 | 5 | 0 |
| [`ses`](services/ses.yml) | 103 | 34 | 0 |
| [`lightsail`](services/lightsail.yml) | 101 | 40 | 0 |
| [`servicecatalog`](services/servicecatalog.yml) | 100 | 4 | 0 |
| [`cognito-idp`](services/cognito-idp.yml) | 100 | 0 | 0 |
| [`quicksight`](services/quicksight.yml) | 99 | 0 | 15 |
| [`greengrass`](services/greengrass.yml) | 90 | 2 | 1 |
| [`gamelift`](services/gamelift.yml) | 90 | 0 | 0 |
| [`redshift`](services/redshift.yml) | 88 | 4 | 18 |
| [`waf-regional`](services/waf-regional.yml) | 81 | 0 | 0 |
| [`config`](services/config.yml) | 79 | 0 | 0 |
| [`storagegateway`](services/storagegateway.yml) | 78 | 6 | 1 |
| [`a4b`](services/a4b.yml) | 77 | 16 | 3 |
| [`codecommit`](services/codecommit.yml) | 77 | 0 | 11 |
| [`waf`](services/waf.yml) | 77 | 0 | 0 |
| [`devicefarm`](services/devicefarm.yml) | 77 | 0 | 0 |
| [`connect`](services/connect.yml) | 76 | 7 | 3 |
| [`opsworks`](services/opsworks.yml) | 73 | 1 | 0 |
| [`s3`](services/s3.yml) | 65 | 56 | 40 |
| [`elasticache`](services/elasticache.yml) | 65 | 0 | 0 |
| [`clouddirectory`](services/clouddirectory.yml) | 62 | 4 | 0 |
| [`comprehend`](services/comprehend.yml) | 60 | 0 | 0 |
| [`cloudfront`](services/cloudfront.yml) | 59 | 16 | 0 |
| [`ds`](services/ds.yml) | 57 | 5 | 6 |
| [`robomaker`](services/robomaker.yml) | 57 | 0 | 2 |
| [`route53`](services/route53.yml) | 57 | 0 | 0 |
| [`autoscaling`](services/autoscaling.yml) | 57 | 0 | 0 |
| [`lambda`](services/lambda.yml) | 56 | 2 | 4 |
| [`directconnect`](services/directconnect.yml) | 56 | 0 | 0 |
| [`guardduty`](services/guardduty.yml) | 55 | 3 | 0 |
| [`iotsitewise`](services/iotsitewise.yml) | 54 | 3 | 0 |
| [`cloudformation`](services/cloudformation.yml) | 54 | 1 | 3 |
| [`medialive`](services/medialive.yml) | 54 | 1 | 0 |
| [`elasticloadbalancing`](services/elasticloadbalancing.yml) | 54 | 0 | 1 |
| [`frauddetector`](services/frauddetector.yml) | 53 | 0 | 0 |
| [`dms`](services/dms.yml) | 51 | 3 | 0 |
| [`organizations`](services/organizations.yml) | 51 | 0 | 0 |
| [`auditmanager`](services/auditmanager.yml) | 51 | 0 | 0 |
| [`macie2`](services/macie2.yml) | 50 | 1 | 3 |
| [`backup`](services/backup.yml) | 50 | 0 | 2 |
| [`ecs`](services/ecs.yml) | 49 | 1 | 2 |
| [`workmail`](services/workmail.yml) | 49 | 0 | 51 |
| [`securityhub`](services/securityhub.yml) | 48 | 0 | 0 |
| [`rekognition`](services/rekognition.yml) | 48 | 0 | 0 |
| [`personalize`](services/personalize.yml) | 48 | 0 | 0 |
| [`appstream`](services/appstream.yml) | 47 | 0 | 3 |
| [`codedeploy`](services/codedeploy.yml) | 47 | 0 | 1 |
| [`globalaccelerator`](services/globalaccelerator.yml) | 47 | 0 | 0 |
| [`elasticbeanstalk`](services/elasticbeanstalk.yml) | 46 | 1 | 3 |
| [`dynamodb`](services/dynamodb.yml) | 45 | 9 | 10 |
| [`kms`](services/kms.yml) | 45 | 1 | 2 |
| [`lex`](services/lex.yml) | 44 | 0 | 0 |
| [`codebuild`](services/codebuild.yml) | 43 | 1 | 8 |
| [`imagebuilder`](services/imagebuilder.yml) | 41 | 1 | 0 |
| [`workdocs`](services/workdocs.yml) | 41 | 0 | 10 |
| [`wafv2`](services/wafv2.yml) | 40 | 0 | 2 |
| [`events`](services/events.yml) | 40 | 0 | 0 |
| [`logs`](services/logs.yml) | 39 | 3 | 5 |
| [`license-manager`](services/license-manager.yml) | 39 | 1 | 1 |
| [`mechanicalturk`](services/mechanicalturk.yml) | 39 | 0 | 0 |
| [`appmesh`](services/appmesh.yml) | 38 | 0 | 1 |
| [`databrew`](services/databrew.yml) | 38 | 0 | 0 |
| [`codepipeline`](services/codepipeline.yml) | 37 | 0 | 0 |
| [`appsync`](services/appsync.yml) | 36 | 5 | 2 |
| [`amplify`](services/amplify.yml) | 36 | 1 | 0 |
| [`sms`](services/sms.yml) | 35 | 0 | 2 |
| [`iotthingsgraph`](services/iotthingsgraph.yml) | 35 | 0 | 0 |
| [`swf`](services/swf.yml) | 34 | 3 | 12 |
| [`codeartifact`](services/codeartifact.yml) | 34 | 0 | 4 |
| [`ecr`](services/ecr.yml) | 34 | 0 | 1 |
| [`forecast`](services/forecast.yml) | 34 | 0 | 0 |
| [`iotanalytics`](services/iotanalytics.yml) | 33 | 1 | 0 |
| [`worklink`](services/worklink.yml) | 33 | 0 | 1 |
| [`sns`](services/sns.yml) | 33 | 0 | 0 |
| [`glacier`](services/glacier.yml) | 33 | 0 | 0 |
| [`appconfig`](services/appconfig.yml) | 33 | 0 | 0 |
| [`workspaces`](services/workspaces.yml) | 32 | 18 | 0 |
| [`elasticmapreduce`](services/elasticmapreduce.yml) | 32 | 14 | 8 |
| [`inspector`](services/inspector.yml) | 32 | 5 | 0 |
| [`route53resolver`](services/route53resolver.yml) | 32 | 0 | 0 |
| [`cloudhsm`](services/cloudhsm.yml) | 31 | 2 | 0 |
| [`datasync`](services/datasync.yml) | 31 | 1 | 0 |
| [`sso`](services/sso.yml) | 31 | 0 | 52 |
| [`schemas`](services/schemas.yml) | 31 | 0 | 0 |
| [`cloudwatch`](services/cloudwatch.yml) | 30 | 0 | 0 |
| [`ce`](services/ce.yml) | 29 | 0 | 10 |
| [`transcribe`](services/transcribe.yml) | 29 | 0 | 2 |
| [`network-firewall`](services/network-firewall.yml) | 29 | 0 | 0 |
| [`es`](services/es.yml) | 28 | 11 | 9 |
| [`cloudsearch`](services/cloudsearch.yml) | 28 | 1 | 4 |
| [`networkmanager`](services/networkmanager.yml) | 28 | 0 | 7 |
| [`athena`](services/athena.yml) | 28 | 0 | 1 |
| [`profile`](services/profile.yml) | 28 | 0 | 0 |
| [`machinelearning`](services/machinelearning.yml) | 28 | 0 | 0 |
| [`kinesis`](services/kinesis.yml) | 28 | 0 | 0 |
| [`kinesisvideo`](services/kinesisvideo.yml) | 27 | 0 | 3 |
| [`eks`](services/eks.yml) | 27 | 0 | 1 |
| [`xray`](services/xray.yml) | 27 | 0 | 0 |
| [`kafka`](services/kafka.yml) | 26 | 3 | 0 |
| [`kinesisanalytics`](services/kinesisanalytics.yml) | 26 | 1 | 1 |
| [`mediastore`](services/mediastore.yml) | 26 | 0 | 0 |
| [`iot1click`](services/iot1click.yml) | 26 | 0 | 0 |
| [`fms`](services/fms.yml) | 25 | 1 | 0 |
| [`elasticfilesystem`](services/elasticfilesystem.yml) | 25 | 0 | 5 |
| [`mediaconvert`](services/mediaconvert.yml) | 25 | 0 | 0 |
| [`groundstation`](services/groundstation.yml) | 25 | 0 | 0 |
| [`discovery`](services/discovery.yml) | 25 | 0 | 0 |
| [`ram`](services/ram.yml) | 24 | 0 | 0 |
| [`kendra`](services/kendra.yml) | 24 | 0 | 0 |
| [`amplifybackend`](services/amplifybackend.yml) | 24 | 0 | 0 |
| [`route53domains`](services/route53domains.yml) | 23 | 5 | 0 |
| [`states`](services/states.yml) | 23 | 0 | 0 |
| [`servicediscovery`](services/servicediscovery.yml) | 23 | 0 | 0 |
| [`codeguru-profiler`](services/codeguru-profiler.yml) | 23 | 0 | 0 |
| [`acm-pca`](services/acm-pca.yml) | 23 | 0 | 0 |
| [`dataexchange`](services/dataexchange.yml) | 22 | 0 | 1 |
| [`mq`](services/mq.yml) | 22 | 0 | 0 |
| [`ivs`](services/ivs.yml) | 22 | 0 | 0 |
| [`dax`](services/dax.yml) | 21 | 0 | 9 |
| [`cognito-identity`](services/cognito-identity.yml) | 21 | 0 | 0 |
| [`qldb`](services/qldb.yml) | 20 | 0 | 3 |
| [`iotevents`](services/iotevents.yml) | 20 | 0 | 1 |
| [`transfer`](services/transfer.yml) | 20 | 0 | 0 |
| [`sqs`](services/sqs.yml) | 20 | 0 | 0 |
| [`managedblockchain`](services/managedblockchain.yml) | 20 | 0 | 0 |
| [`ecr-public`](services/ecr-public.yml) | 20 | 0 | 0 |
| [`mgh`](services/mgh.yml) | 19 | 1 | 0 |
| [`datapipeline`](services/datapipeline.yml) | 19 | 0 | 2 |
| [`secretsmanager`](services/secretsmanager.yml) | 19 | 0 | 0 |
| [`batch`](services/batch.yml) | 19 | 0 | 0 |
| [`access-analyzer`](services/access-analyzer.yml) | 19 | 0 | 0 |
| [`shield`](services/shield.yml) | 18 | 12 | 0 |
| [`opsworks-cm`](services/opsworks-cm.yml) | 18 | 1 | 0 |
| [`appflow`](services/appflow.yml) | 18 | 0 | 5 |
| [`codestar`](services/codestar.yml) | 18 | 0 | 3 |
| [`devops-guru`](services/devops-guru.yml) | 18 | 0 | 0 |
| [`cloudtrail`](services/cloudtrail.yml) | 18 | 0 | 0 |
| [`applicationinsights`](services/applicationinsights.yml) | 17 | 10 | 0 |
| [`snowball`](services/snowball.yml) | 17 | 5 | 0 |
| [`mediapackage`](services/mediapackage.yml) | 17 | 2 | 0 |
| [`cognito-sync`](services/cognito-sync.yml) | 17 | 0 | 2 |
| [`signer`](services/signer.yml) | 17 | 0 | 0 |
| [`elastictranscoder`](services/elastictranscoder.yml) | 17 | 0 | 0 |
| [`timestream`](services/timestream.yml) | 16 | 1 | 3 |
| [`lookoutvision`](services/lookoutvision.yml) | 16 | 0 | 3 |
| [`servicequotas`](services/servicequotas.yml) | 16 | 0 | 0 |
| [`mediaconnect`](services/mediaconnect.yml) | 14 | 13 | 0 |
| [`fsx`](services/fsx.yml) | 14 | 3 | 0 |
| [`support`](services/support.yml) | 14 | 0 | 8 |
| [`serverlessrepo`](services/serverlessrepo.yml) | 14 | 0 | 1 |
| [`translate`](services/translate.yml) | 14 | 0 | 0 |
| [`cloud9`](services/cloud9.yml) | 13 | 0 | 2 |
| [`lakeformation`](services/lakeformation.yml) | 13 | 0 | 1 |
| [`health`](services/health.yml) | 13 | 0 | 0 |
| [`codestar-notifications`](services/codestar-notifications.yml) | 13 | 0 | 0 |
| [`acm`](services/acm.yml) | 13 | 0 | 0 |
| [`mediapackage-vod`](services/mediapackage-vod.yml) | 12 | 4 | 0 |
| [`resource-groups`](services/resource-groups.yml) | 12 | 3 | 0 |
| [`honeycode`](services/honeycode.yml) | 12 | 0 | 5 |
| [`detective`](services/detective.yml) | 12 | 0 | 5 |
| [`firehose`](services/firehose.yml) | 12 | 0 | 0 |
| [`emr-containers`](services/emr-containers.yml) | 11 | 4 | 0 |
| [`synthetics`](services/synthetics.yml) | 11 | 2 | 0 |
| [`codestar-connections`](services/codestar-connections.yml) | 11 | 1 | 9 |
| [`aws-marketplace`](services/aws-marketplace.yml) | 11 | 0 | 39 |
| [`airflow`](services/airflow.yml) | 11 | 0 | 0 |
| [`codeguru-reviewer`](services/codeguru-reviewer.yml) | 10 | 4 | 3 |
| [`sdb`](services/sdb.yml) | 10 | 0 | 0 |
| [`compute-optimizer`](services/compute-optimizer.yml) | 10 | 0 | 0 |
| [`application-autoscaling`](services/application-autoscaling.yml) | 10 | 0 | 0 |
| [`iot`](services/iot.yml) | 9 | 0 | 212 |
| [`savingsplans`](services/savingsplans.yml) | 9 | 0 | 0 |
| [`redshift-data`](services/redshift-data.yml) | 9 | 0 | 0 |
| [`polly`](services/polly.yml) | 9 | 0 | 0 |
| [`braket`](services/braket.yml) | 9 | 0 | 0 |
| [`budgets`](services/budgets.yml) | 8 | 14 | 2 |
| [`mobilehub`](services/mobilehub.yml) | 8 | 1 | 15 |
| [`sts`](services/sts.yml) | 8 | 0 | 2 |
| [`tag`](services/tag.yml) | 8 | 0 | 0 |
| [`sms-voice`](services/sms-voice.yml) | 8 | 0 | 0 |
| [`dlm`](services/dlm.yml) | 8 | 0 | 0 |
| [`outposts`](services/outposts.yml) | 7 | 0 | 0 |
| [`mediatailor`](services/mediatailor.yml) | 7 | 0 | 0 |
| [`macie`](services/macie.yml) | 7 | 0 | 0 |
| [`textract`](services/textract.yml) | 6 | 0 | 0 |
| [`rds-data`](services/rds-data.yml) | 6 | 0 | 0 |
| [`importexport`](services/importexport.yml) | 6 | 0 | 0 |
| [`ebs`](services/ebs.yml) | 6 | 0 | 0 |
| [`autoscaling-plans`](services/autoscaling-plans.yml) | 6 | 0 | 0 |
| [`identitystore`](services/identitystore.yml) | 4 | 0 | 0 |
| [`cur`](services/cur.yml) | 4 | 0 | 0 |
| [`s3-outposts`](services/s3-outposts.yml) | 3 | 0 | 29 |
| [`pricing`](services/pricing.yml) | 3 | 0 | 0 |
| [`comprehendmedical`](services/comprehendmedical.yml) | 2 | 19 | 0 |
| [`pi`](services/pi.yml) | 2 | 0 | 0 |
| [`mobileanalytics`](services/mobileanalytics.yml) | 1 | 0 | 2 |
| [`workmailmessageflow`](services/workmailmessageflow.yml) | 1 | 0 | 0 |
| [`ec2-instance-connect`](services/ec2-instance-connect.yml) | 1 | 0 | 0 |
| [`execute-api`](services/execute-api.yml) | 0 | 220 | 3 |
| [`apigateway`](services/apigateway.yml) | 0 | 152 | 7 |
| [`app-integrations`](services/app-integrations.yml) | 0 | 9 | 0 |
| [`IoTSecuredTunneling`](services/IoTSecuredTunneling.yml) | 0 | 7 | 0 |
| [`elastic-inference`](services/elastic-inference.yml) | 0 | 6 | 1 |
| [`healthlake`](services/healthlake.yml) | 0 | 6 | 0 |
| [`awsssoportal`](services/awsssoportal.yml) | 0 | 4 | 0 |
| [`awsssooidc`](services/awsssooidc.yml) | 0 | 3 | 0 |
| [`marketplacecommerceanalytics`](services/marketplacecommerceanalytics.yml) | 0 | 2 | 0 |
| [`proton`](services/proton.yml) | 0 | 0 | 47 |
| [`sso-directory`](services/sso-directory.yml) | 0 | 0 | 45 |
| [`panorama`](services/panorama.yml) | 0 | 0 | 42 |
| [`appmesh-preview`](services/appmesh-preview.yml) | 0 | 0 | 36 |
| [`deepracer`](services/deepracer.yml) | 0 | 0 | 26 |
| [`deeplens`](services/deeplens.yml) | 0 | 0 | 24 |
| [`trustedadvisor`](services/trustedadvisor.yml) | 0 | 0 | 21 |
| [`deepcomposer`](services/deepcomposer.yml) | 0 | 0 | 18 |
| [`monitron`](services/monitron.yml) | 0 | 0 | 12 |
| [`chatbot`](services/chatbot.yml) | 0 | 0 | 12 |
| [`freertos`](services/freertos.yml) | 0 | 0 | 11 |
| [`dbqms`](services/dbqms.yml) | 0 | 0 | 9 |
| [`launchwizard`](services/launchwizard.yml) | 0 | 0 | 8 |
| [`cassandra`](services/cassandra.yml) | 0 | 0 | 8 |
| [`activate`](services/activate.yml) | 0 | 0 | 8 |
| [`elemental-appliances-software`](services/elemental-appliances-software.yml) | 0 | 0 | 7 |
| [`aws-portal`](services/aws-portal.yml) | 0 | 0 | 7 |
| [`elemental-activations`](services/elemental-activations.yml) | 0 | 0 | 6 |
| [`ec2messages`](services/ec2messages.yml) | 0 | 0 | 6 |
| [`wellarchitected`](services/wellarchitected.yml) | 0 | 0 | 5 |
| [`iot-device-tester`](services/iot-device-tester.yml) | 0 | 0 | 5 |
| [`aws-marketplace-management`](services/aws-marketplace-management.yml) | 0 | 0 | 5 |
| [`ssmmessages`](services/ssmmessages.yml) | 0 | 0 | 4 |
| [`groundtruthlabeling`](services/groundtruthlabeling.yml) | 0 | 0 | 4 |
| [`elemental-support-cases`](services/elemental-support-cases.yml) | 0 | 0 | 4 |
| [`artifact`](services/artifact.yml) | 0 | 0 | 4 |
| [`resource-explorer`](services/resource-explorer.yml) | 0 | 0 | 3 |
| [`awsconnector`](services/awsconnector.yml) | 0 | 0 | 3 |
| [`account`](services/account.yml) | 0 | 0 | 3 |
| [`sumerian`](services/sumerian.yml) | 0 | 0 | 2 |
| [`purchase-orders`](services/purchase-orders.yml) | 0 | 0 | 2 |
| [`wam`](services/wam.yml) | 0 | 0 | 1 |
| [`rds-db`](services/rds-db.yml) | 0 | 0 | 1 |
| [`neptune-db`](services/neptune-db.yml) | 0 | 0 | 1 |
| [`iq-permission`](services/iq-permission.yml) | 0 | 0 | 1 |
| [`iq`](services/iq.yml) | 0 | 0 | 1 |
| [`elemental-support-content`](services/elemental-support-content.yml) | 0 | 0 | 1 |
| [`codeguru`](services/codeguru.yml) | 0 | 0 | 1 |
| [`backup-storage`](services/backup-storage.yml) | 0 | 0 | 1 |
| [`arsenal`](services/arsenal.yml) | 0 | 0 | 1 |

Most common action prefixes:

| Prefix | Count |
| ------ | ----- |
| `List` | 1397 |
| `Get` | 1270 |
| `Describe` | 1204 |
| `Delete` | 1157 |
| `Create` | 1057 |
| `Update` | 823 |
| `Put` | 284 |
| `Start` | 173 |
| `Tag` | 140 |
| `Untag` | 139 |

