# AWS IAM Tracker

This project collects IAM actions, AWS APIs and managed policies from various public sources.

You can explore the data collected using [the static site](https://glassechidna.github.io/trackiam/).

Collected data is published to the [policies](/policies) and [services](/services) folders in this repo.

Thank you to [alanakirby/aktion](https://github.com/alanakirby/aktion) for originally 
having this idea and being gracious about me shamelessly ripping it off.
	
# Stats

* Unique services: 281
* Unique actions: 11137
* Managed policies: 846

Most common managed policy name prefixes:

| Policy ARN | Count |
| ------ | ----- |
| `arn:aws:iam::aws:policy/AWS*` | 236 |
| `arn:aws:iam::aws:policy/Amazon*` | 231 |
| `arn:aws:iam::aws:policy/aws-service-role/*` | 166 |
| `arn:aws:iam::aws:policy/service-role/*` | 126 |
| `arn:aws:iam::aws:policy/job-function/*` | 7 |
| Other | 80 |

The following table summarises the AWS APIs. 

* The first column is the name of the API as far as IAM policies are concerned. 
* The second column is IAM actions that exactly match the names of invokable 
  APIs exposed by AWS.
* The third column is invokable APIs that don't have a corresponding IAM action.
* The fourth column is IAM actions that don't have a corresponding invokable API.

| Service | Action/API pairs | APIs without actions | Actions without APIs |
| ------ | ----- | ----- | ----- |
| [`ec2`](services/ec2.yml) | 453 | 12 | 0 |
| [`sagemaker`](services/sagemaker.yml) | 247 | 1 | 2 |
| [`chime`](services/chime.yml) | 188 | 2 | 51 |
| [`iam`](services/iam.yml) | 158 | 0 | 1 |
| [`lightsail`](services/lightsail.yml) | 153 | 0 | 0 |
| [`glue`](services/glue.yml) | 147 | 10 | 1 |
| [`ses`](services/ses.yml) | 138 | 0 | 0 |
| [`rds`](services/rds.yml) | 137 | 0 | 1 |
| [`ssm`](services/ssm.yml) | 134 | 1 | 7 |
| [`mobiletargeting`](services/mobiletargeting.yml) | 112 | 0 | 0 |
| [`connect`](services/connect.yml) | 110 | 0 | 3 |
| [`greengrass`](services/greengrass.yml) | 107 | 3 | 1 |
| [`servicecatalog`](services/servicecatalog.yml) | 107 | 0 | 1 |
| [`redshift`](services/redshift.yml) | 101 | 15 | 18 |
| [`quicksight`](services/quicksight.yml) | 101 | 12 | 19 |
| [`cognito-idp`](services/cognito-idp.yml) | 100 | 1 | 0 |
| [`gamelift`](services/gamelift.yml) | 95 | 0 | 0 |
| [`a4b`](services/a4b.yml) | 93 | 0 | 3 |
| [`lex`](services/lex.yml) | 91 | 5 | 4 |
| [`storagegateway`](services/storagegateway.yml) | 89 | 0 | 1 |
| [`config`](services/config.yml) | 86 | 0 | 0 |
| [`cloudfront`](services/cloudfront.yml) | 85 | 0 | 0 |
| [`waf-regional`](services/waf-regional.yml) | 81 | 0 | 0 |
| [`codecommit`](services/codecommit.yml) | 77 | 0 | 11 |
| [`waf`](services/waf.yml) | 77 | 0 | 0 |
| [`devicefarm`](services/devicefarm.yml) | 77 | 0 | 0 |
| [`s3`](services/s3.yml) | 75 | 57 | 42 |
| [`opsworks`](services/opsworks.yml) | 74 | 0 | 0 |
| [`elasticache`](services/elasticache.yml) | 65 | 0 | 0 |
| [`route53`](services/route53.yml) | 64 | 0 | 0 |
| [`clouddirectory`](services/clouddirectory.yml) | 63 | 3 | 0 |
| [`ds`](services/ds.yml) | 62 | 1 | 6 |
| [`comprehend`](services/comprehend.yml) | 61 | 0 | 0 |
| [`autoscaling`](services/autoscaling.yml) | 60 | 1 | 0 |
| [`route53resolver`](services/route53resolver.yml) | 60 | 0 | 0 |
| [`guardduty`](services/guardduty.yml) | 58 | 0 | 0 |
| [`iotsitewise`](services/iotsitewise.yml) | 57 | 3 | 1 |
| [`robomaker`](services/robomaker.yml) | 57 | 0 | 2 |
| [`iotwireless`](services/iotwireless.yml) | 57 | 0 | 0 |
| [`frauddetector`](services/frauddetector.yml) | 57 | 0 | 0 |
| [`directconnect`](services/directconnect.yml) | 56 | 3 | 0 |
| [`lambda`](services/lambda.yml) | 56 | 2 | 4 |
| [`macie2`](services/macie2.yml) | 56 | 0 | 0 |
| [`cloudformation`](services/cloudformation.yml) | 55 | 9 | 3 |
| [`medialive`](services/medialive.yml) | 55 | 1 | 0 |
| [`dms`](services/dms.yml) | 54 | 1 | 0 |
| [`workmail`](services/workmail.yml) | 54 | 0 | 51 |
| [`elasticloadbalancing`](services/elasticloadbalancing.yml) | 54 | 0 | 1 |
| [`workspaces`](services/workspaces.yml) | 53 | 0 | 0 |
| [`ecs`](services/ecs.yml) | 52 | 0 | 2 |
| [`securityhub`](services/securityhub.yml) | 51 | 0 | 9 |
| [`backup`](services/backup.yml) | 51 | 0 | 2 |
| [`events`](services/events.yml) | 51 | 0 | 1 |
| [`rekognition`](services/rekognition.yml) | 51 | 0 | 0 |
| [`organizations`](services/organizations.yml) | 51 | 0 | 0 |
| [`auditmanager`](services/auditmanager.yml) | 51 | 0 | 0 |
| [`proton`](services/proton.yml) | 49 | 0 | 23 |
| [`imagebuilder`](services/imagebuilder.yml) | 49 | 0 | 0 |
| [`dynamodb`](services/dynamodb.yml) | 48 | 6 | 10 |
| [`personalize`](services/personalize.yml) | 48 | 4 | 0 |
| [`geo`](services/geo.yml) | 47 | 3 | 0 |
| [`kms`](services/kms.yml) | 47 | 1 | 3 |
| [`appstream`](services/appstream.yml) | 47 | 1 | 1 |
| [`codedeploy`](services/codedeploy.yml) | 47 | 0 | 1 |
| [`globalaccelerator`](services/globalaccelerator.yml) | 47 | 0 | 0 |
| [`elasticmapreduce`](services/elasticmapreduce.yml) | 46 | 3 | 15 |
| [`elasticbeanstalk`](services/elasticbeanstalk.yml) | 46 | 1 | 3 |
| [`codebuild`](services/codebuild.yml) | 45 | 0 | 8 |
| [`nimble`](services/nimble.yml) | 45 | 0 | 2 |
| [`license-manager`](services/license-manager.yml) | 45 | 0 | 0 |
| [`logs`](services/logs.yml) | 42 | 0 | 5 |
| [`workdocs`](services/workdocs.yml) | 41 | 0 | 11 |
| [`appsync`](services/appsync.yml) | 41 | 0 | 2 |
| [`wafv2`](services/wafv2.yml) | 40 | 5 | 2 |
| [`es`](services/es.yml) | 39 | 1 | 37 |
| [`sns`](services/sns.yml) | 39 | 0 | 0 |
| [`mechanicalturk`](services/mechanicalturk.yml) | 39 | 0 | 0 |
| [`databrew`](services/databrew.yml) | 39 | 0 | 0 |
| [`kendra`](services/kendra.yml) | 38 | 5 | 0 |
| [`transcribe`](services/transcribe.yml) | 38 | 0 | 2 |
| [`appmesh`](services/appmesh.yml) | 38 | 0 | 1 |
| [`codepipeline`](services/codepipeline.yml) | 37 | 2 | 0 |
| [`swf`](services/swf.yml) | 37 | 0 | 12 |
| [`inspector`](services/inspector.yml) | 37 | 0 | 0 |
| [`amplify`](services/amplify.yml) | 37 | 0 | 0 |
| [`forecast`](services/forecast.yml) | 36 | 0 | 0 |
| [`cloudwatch`](services/cloudwatch.yml) | 36 | 0 | 0 |
| [`sms`](services/sms.yml) | 35 | 0 | 2 |
| [`networkmanager`](services/networkmanager.yml) | 35 | 0 | 0 |
| [`iotthingsgraph`](services/iotthingsgraph.yml) | 35 | 0 | 0 |
| [`iotevents`](services/iotevents.yml) | 34 | 3 | 1 |
| [`codeartifact`](services/codeartifact.yml) | 34 | 0 | 4 |
| [`ecr`](services/ecr.yml) | 34 | 0 | 1 |
| [`athena`](services/athena.yml) | 34 | 0 | 1 |
| [`iotanalytics`](services/iotanalytics.yml) | 34 | 0 | 0 |
| [`worklink`](services/worklink.yml) | 33 | 0 | 1 |
| [`shield`](services/shield.yml) | 33 | 0 | 0 |
| [`glacier`](services/glacier.yml) | 33 | 0 | 0 |
| [`cloudhsm`](services/cloudhsm.yml) | 33 | 0 | 0 |
| [`appconfig`](services/appconfig.yml) | 33 | 0 | 0 |
| [`datasync`](services/datasync.yml) | 32 | 3 | 0 |
| [`eks`](services/eks.yml) | 32 | 0 | 1 |
| [`route53-recovery-readiness`](services/route53-recovery-readiness.yml) | 32 | 0 | 0 |
| [`sso`](services/sso.yml) | 31 | 0 | 52 |
| [`wellarchitected`](services/wellarchitected.yml) | 31 | 0 | 0 |
| [`schemas`](services/schemas.yml) | 31 | 0 | 0 |
| [`ce`](services/ce.yml) | 30 | 0 | 10 |
| [`mediaconnect`](services/mediaconnect.yml) | 30 | 0 | 0 |
| [`kafka`](services/kafka.yml) | 30 | 0 | 0 |
| [`ssm-incidents`](services/ssm-incidents.yml) | 29 | 0 | 0 |
| [`network-firewall`](services/network-firewall.yml) | 29 | 0 | 0 |
| [`profile`](services/profile.yml) | 28 | 2 | 0 |
| [`cloudsearch`](services/cloudsearch.yml) | 28 | 1 | 4 |
| [`route53domains`](services/route53domains.yml) | 28 | 0 | 0 |
| [`machinelearning`](services/machinelearning.yml) | 28 | 0 | 0 |
| [`kinesis`](services/kinesis.yml) | 28 | 0 | 0 |
| [`access-analyzer`](services/access-analyzer.yml) | 28 | 0 | 0 |
| [`kinesisanalytics`](services/kinesisanalytics.yml) | 27 | 4 | 1 |
| [`elasticfilesystem`](services/elasticfilesystem.yml) | 27 | 0 | 5 |
| [`kinesisvideo`](services/kinesisvideo.yml) | 27 | 0 | 3 |
| [`xray`](services/xray.yml) | 27 | 0 | 0 |
| [`applicationinsights`](services/applicationinsights.yml) | 27 | 0 | 0 |
| [`mediastore`](services/mediastore.yml) | 26 | 0 | 0 |
| [`ivs`](services/ivs.yml) | 26 | 0 | 0 |
| [`iot1click`](services/iot1click.yml) | 26 | 0 | 0 |
| [`fms`](services/fms.yml) | 26 | 0 | 0 |
| [`mgn`](services/mgn.yml) | 25 | 0 | 26 |
| [`lookoutmetrics`](services/lookoutmetrics.yml) | 25 | 0 | 1 |
| [`mediaconvert`](services/mediaconvert.yml) | 25 | 0 | 0 |
| [`groundstation`](services/groundstation.yml) | 25 | 0 | 0 |
| [`discovery`](services/discovery.yml) | 25 | 0 | 0 |
| [`amplifybackend`](services/amplifybackend.yml) | 25 | 0 | 0 |
| [`ram`](services/ram.yml) | 24 | 0 | 0 |
| [`ssm-contacts`](services/ssm-contacts.yml) | 23 | 4 | 3 |
| [`servicediscovery`](services/servicediscovery.yml) | 23 | 3 | 0 |
| [`states`](services/states.yml) | 23 | 0 | 0 |
| [`managedblockchain`](services/managedblockchain.yml) | 23 | 0 | 0 |
| [`ecr-public`](services/ecr-public.yml) | 23 | 0 | 0 |
| [`cognito-identity`](services/cognito-identity.yml) | 23 | 0 | 0 |
| [`codeguru-profiler`](services/codeguru-profiler.yml) | 23 | 0 | 0 |
| [`acm-pca`](services/acm-pca.yml) | 23 | 0 | 0 |
| [`snowball`](services/snowball.yml) | 22 | 3 | 0 |
| [`dataexchange`](services/dataexchange.yml) | 22 | 0 | 2 |
| [`apprunner`](services/apprunner.yml) | 22 | 0 | 1 |
| [`secretsmanager`](services/secretsmanager.yml) | 22 | 0 | 0 |
| [`mq`](services/mq.yml) | 22 | 0 | 0 |
| [`lookoutequipment`](services/lookoutequipment.yml) | 22 | 0 | 0 |
| [`qldb`](services/qldb.yml) | 21 | 0 | 13 |
| [`dax`](services/dax.yml) | 21 | 0 | 9 |
| [`devops-guru`](services/devops-guru.yml) | 21 | 0 | 0 |
| [`transfer`](services/transfer.yml) | 20 | 5 | 0 |
| [`comprehendmedical`](services/comprehendmedical.yml) | 20 | 1 | 0 |
| [`route53-recovery-control-config`](services/route53-recovery-control-config.yml) | 20 | 0 | 1 |
| [`sqs`](services/sqs.yml) | 20 | 0 | 0 |
| [`mgh`](services/mgh.yml) | 20 | 0 | 0 |
| [`lookoutvision`](services/lookoutvision.yml) | 19 | 0 | 3 |
| [`datapipeline`](services/datapipeline.yml) | 19 | 0 | 2 |
| [`servicequotas`](services/servicequotas.yml) | 19 | 0 | 0 |
| [`opsworks-cm`](services/opsworks-cm.yml) | 19 | 0 | 0 |
| [`batch`](services/batch.yml) | 19 | 0 | 0 |
| [`mediapackage`](services/mediapackage.yml) | 18 | 1 | 0 |
| [`appflow`](services/appflow.yml) | 18 | 0 | 6 |
| [`fsx`](services/fsx.yml) | 18 | 0 | 4 |
| [`codestar`](services/codestar.yml) | 18 | 0 | 3 |
| [`cloudtrail`](services/cloudtrail.yml) | 18 | 0 | 0 |
| [`cognito-sync`](services/cognito-sync.yml) | 17 | 0 | 2 |
| [`signer`](services/signer.yml) | 17 | 0 | 0 |
| [`elastictranscoder`](services/elastictranscoder.yml) | 17 | 0 | 0 |
| [`timestream`](services/timestream.yml) | 16 | 1 | 3 |
| [`mediapackage-vod`](services/mediapackage-vod.yml) | 16 | 1 | 0 |
| [`resource-groups`](services/resource-groups.yml) | 16 | 0 | 1 |
| [`detective`](services/detective.yml) | 15 | 0 | 5 |
| [`emr-containers`](services/emr-containers.yml) | 15 | 0 | 0 |
| [`acm`](services/acm.yml) | 15 | 0 | 0 |
| [`support`](services/support.yml) | 14 | 0 | 8 |
| [`fis`](services/fis.yml) | 14 | 0 | 3 |
| [`codeguru-reviewer`](services/codeguru-reviewer.yml) | 14 | 0 | 3 |
| [`serverlessrepo`](services/serverlessrepo.yml) | 14 | 0 | 1 |
| [`translate`](services/translate.yml) | 14 | 0 | 0 |
| [`lakeformation`](services/lakeformation.yml) | 13 | 10 | 1 |
| [`healthlake`](services/healthlake.yml) | 13 | 0 | 7 |
| [`cloud9`](services/cloud9.yml) | 13 | 0 | 2 |
| [`synthetics`](services/synthetics.yml) | 13 | 0 | 0 |
| [`snow-device-management`](services/snow-device-management.yml) | 13 | 0 | 0 |
| [`iotdeviceadvisor`](services/iotdeviceadvisor.yml) | 13 | 0 | 0 |
| [`health`](services/health.yml) | 13 | 0 | 0 |
| [`compute-optimizer`](services/compute-optimizer.yml) | 13 | 0 | 0 |
| [`codestar-notifications`](services/codestar-notifications.yml) | 13 | 0 | 0 |
| [`honeycode`](services/honeycode.yml) | 12 | 0 | 14 |
| [`codestar-connections`](services/codestar-connections.yml) | 12 | 0 | 9 |
| [`firehose`](services/firehose.yml) | 12 | 0 | 0 |
| [`aws-marketplace`](services/aws-marketplace.yml) | 11 | 0 | 30 |
| [`airflow`](services/airflow.yml) | 11 | 0 | 0 |
| [`sdb`](services/sdb.yml) | 10 | 0 | 0 |
| [`redshift-data`](services/redshift-data.yml) | 10 | 0 | 0 |
| [`outposts`](services/outposts.yml) | 10 | 0 | 0 |
| [`application-autoscaling`](services/application-autoscaling.yml) | 10 | 0 | 0 |
| [`iot`](services/iot.yml) | 9 | 0 | 239 |
| [`app-integrations`](services/app-integrations.yml) | 9 | 0 | 2 |
| [`savingsplans`](services/savingsplans.yml) | 9 | 0 | 0 |
| [`polly`](services/polly.yml) | 9 | 0 | 0 |
| [`braket`](services/braket.yml) | 9 | 0 | 0 |
| [`budgets`](services/budgets.yml) | 8 | 14 | 2 |
| [`mobilehub`](services/mobilehub.yml) | 8 | 1 | 15 |
| [`sts`](services/sts.yml) | 8 | 0 | 3 |
| [`tag`](services/tag.yml) | 8 | 0 | 0 |
| [`sms-voice`](services/sms-voice.yml) | 8 | 0 | 0 |
| [`iotfleethub`](services/iotfleethub.yml) | 8 | 0 | 0 |
| [`dlm`](services/dlm.yml) | 8 | 0 | 0 |
| [`mediatailor`](services/mediatailor.yml) | 7 | 25 | 0 |
| [`macie`](services/macie.yml) | 7 | 0 | 0 |
| [`textract`](services/textract.yml) | 6 | 1 | 0 |
| [`elastic-inference`](services/elastic-inference.yml) | 6 | 0 | 1 |
| [`rds-data`](services/rds-data.yml) | 6 | 0 | 0 |
| [`importexport`](services/importexport.yml) | 6 | 0 | 0 |
| [`ebs`](services/ebs.yml) | 6 | 0 | 0 |
| [`autoscaling-plans`](services/autoscaling-plans.yml) | 6 | 0 | 0 |
| [`application-cost-profiler`](services/application-cost-profiler.yml) | 6 | 0 | 0 |
| [`aps`](services/aps.yml) | 5 | 0 | 5 |
| [`identitystore`](services/identitystore.yml) | 4 | 0 | 0 |
| [`cur`](services/cur.yml) | 4 | 0 | 0 |
| [`s3-outposts`](services/s3-outposts.yml) | 3 | 0 | 29 |
| [`route53-recovery-cluster`](services/route53-recovery-cluster.yml) | 3 | 0 | 0 |
| [`pricing`](services/pricing.yml) | 3 | 0 | 0 |
| [`pi`](services/pi.yml) | 3 | 0 | 0 |
| [`workmailmessageflow`](services/workmailmessageflow.yml) | 2 | 0 | 0 |
| [`marketplacecommerceanalytics`](services/marketplacecommerceanalytics.yml) | 2 | 0 | 0 |
| [`ec2-instance-connect`](services/ec2-instance-connect.yml) | 2 | 0 | 0 |
| [`mobileanalytics`](services/mobileanalytics.yml) | 1 | 0 | 2 |
| [`execute-api`](services/execute-api.yml) | 0 | 238 | 3 |
| [`apigateway`](services/apigateway.yml) | 0 | 152 | 9 |
| [`finspace`](services/finspace.yml) | 0 | 8 | 0 |
| [`IoTSecuredTunneling`](services/IoTSecuredTunneling.yml) | 0 | 7 | 0 |
| [`awsssoportal`](services/awsssoportal.yml) | 0 | 4 | 0 |
| [`finspace-api`](services/finspace-api.yml) | 0 | 3 | 0 |
| [`awsssooidc`](services/awsssooidc.yml) | 0 | 3 | 0 |
| [`sso-directory`](services/sso-directory.yml) | 0 | 0 | 52 |
| [`deepracer`](services/deepracer.yml) | 0 | 0 | 46 |
| [`panorama`](services/panorama.yml) | 0 | 0 | 42 |
| [`appmesh-preview`](services/appmesh-preview.yml) | 0 | 0 | 36 |
| [`controltower`](services/controltower.yml) | 0 | 0 | 29 |
| [`s3-object-lambda`](services/s3-object-lambda.yml) | 0 | 0 | 26 |
| [`deeplens`](services/deeplens.yml) | 0 | 0 | 24 |
| [`trustedadvisor`](services/trustedadvisor.yml) | 0 | 0 | 21 |
| [`kafka-cluster`](services/kafka-cluster.yml) | 0 | 0 | 19 |
| [`deepcomposer`](services/deepcomposer.yml) | 0 | 0 | 18 |
| [`bugbust`](services/bugbust.yml) | 0 | 0 | 17 |
| [`dbqms`](services/dbqms.yml) | 0 | 0 | 13 |
| [`chatbot`](services/chatbot.yml) | 0 | 0 | 13 |
| [`monitron`](services/monitron.yml) | 0 | 0 | 12 |
| [`freertos`](services/freertos.yml) | 0 | 0 | 11 |
| [`elemental-activations`](services/elemental-activations.yml) | 0 | 0 | 10 |
| [`grafana`](services/grafana.yml) | 0 | 0 | 9 |
| [`cloudshell`](services/cloudshell.yml) | 0 | 0 | 9 |
| [`launchwizard`](services/launchwizard.yml) | 0 | 0 | 8 |
| [`cassandra`](services/cassandra.yml) | 0 | 0 | 8 |
| [`activate`](services/activate.yml) | 0 | 0 | 8 |
| [`elemental-appliances-software`](services/elemental-appliances-software.yml) | 0 | 0 | 7 |
| [`aws-portal`](services/aws-portal.yml) | 0 | 0 | 7 |
| [`ec2messages`](services/ec2messages.yml) | 0 | 0 | 6 |
| [`iot-device-tester`](services/iot-device-tester.yml) | 0 | 0 | 5 |
| [`groundtruthlabeling`](services/groundtruthlabeling.yml) | 0 | 0 | 5 |
| [`elemental-support-cases`](services/elemental-support-cases.yml) | 0 | 0 | 5 |
| [`aws-marketplace-management`](services/aws-marketplace-management.yml) | 0 | 0 | 5 |
| [`ssmmessages`](services/ssmmessages.yml) | 0 | 0 | 4 |
| [`artifact`](services/artifact.yml) | 0 | 0 | 4 |
| [`tiros`](services/tiros.yml) | 0 | 0 | 3 |
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
| `List` | 1637 |
| `Get` | 1457 |
| `Describe` | 1346 |
| `Delete` | 1301 |
| `Create` | 1198 |
| `Update` | 967 |
| `Put` | 321 |
| `Start` | 200 |
| `Tag` | 174 |
| `Untag` | 172 |

