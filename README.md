# AWS IAM Tracker

This project collects IAM actions, AWS APIs and managed policies from various public sources.

You can explore the data collected using [the static site](https://glassechidna.github.io/trackiam/).

Collected data is published to the [policies](/policies) and [services](/services) folders in this repo.

Thank you to [alanakirby/aktion](https://github.com/alanakirby/aktion) for originally 
having this idea and being gracious about me shamelessly ripping it off.
	
# Stats

* Unique services: 314
* Unique actions: 12822
* Managed policies: 948

Most common managed policy name prefixes:

| Policy ARN | Count |
| ------ | ----- |
| `arn:aws:iam::aws:policy/AWS*` | 264 |
| `arn:aws:iam::aws:policy/Amazon*` | 254 |
| `arn:aws:iam::aws:policy/aws-service-role/*` | 194 |
| `arn:aws:iam::aws:policy/service-role/*` | 146 |
| `arn:aws:iam::aws:policy/job-function/*` | 7 |
| Other | 83 |

The following table summarises the AWS APIs. 

* The first column is the name of the API as far as IAM policies are concerned. 
* The second column is IAM actions that exactly match the names of invokable 
  APIs exposed by AWS.
* The third column is invokable APIs that don't have a corresponding IAM action.
* The fourth column is IAM actions that don't have a corresponding invokable API.

| Service | Action/API pairs | APIs without actions | Actions without APIs |
| ------ | ----- | ----- | ----- |
| [`ec2`](services/ec2.yml) | 522 | 0 | 9 |
| [`sagemaker`](services/sagemaker.yml) | 264 | 0 | 5 |
| [`chime`](services/chime.yml) | 207 | 0 | 51 |
| [`glue`](services/glue.yml) | 175 | 8 | 2 |
| [`iam`](services/iam.yml) | 158 | 0 | 1 |
| [`lightsail`](services/lightsail.yml) | 153 | 0 | 0 |
| [`connect`](services/connect.yml) | 143 | 0 | 6 |
| [`ses`](services/ses.yml) | 138 | 0 | 0 |
| [`ssm`](services/ssm.yml) | 135 | 0 | 8 |
| [`rds`](services/rds.yml) | 135 | 0 | 5 |
| [`mobiletargeting`](services/mobiletargeting.yml) | 119 | 0 | 1 |
| [`redshift`](services/redshift.yml) | 118 | 0 | 18 |
| [`quicksight`](services/quicksight.yml) | 117 | 0 | 25 |
| [`greengrass`](services/greengrass.yml) | 110 | 0 | 1 |
| [`servicecatalog`](services/servicecatalog.yml) | 108 | 0 | 0 |
| [`lex`](services/lex.yml) | 103 | 2 | 7 |
| [`cognito-idp`](services/cognito-idp.yml) | 101 | 0 | 0 |
| [`gamelift`](services/gamelift.yml) | 95 | 0 | 0 |
| [`a4b`](services/a4b.yml) | 93 | 0 | 3 |
| [`cloudfront`](services/cloudfront.yml) | 91 | 1 | 1 |
| [`storagegateway`](services/storagegateway.yml) | 90 | 0 | 1 |
| [`iotwireless`](services/iotwireless.yml) | 87 | 0 | 1 |
| [`config`](services/config.yml) | 86 | 2 | 0 |
| [`s3`](services/s3.yml) | 83 | 58 | 45 |
| [`waf-regional`](services/waf-regional.yml) | 81 | 0 | 0 |
| [`codecommit`](services/codecommit.yml) | 77 | 0 | 11 |
| [`waf`](services/waf.yml) | 77 | 0 | 0 |
| [`devicefarm`](services/devicefarm.yml) | 77 | 0 | 0 |
| [`networkmanager`](services/networkmanager.yml) | 76 | 0 | 0 |
| [`opsworks`](services/opsworks.yml) | 74 | 0 | 0 |
| [`comprehend`](services/comprehend.yml) | 71 | 0 | 0 |
| [`workmail`](services/workmail.yml) | 68 | 0 | 51 |
| [`frauddetector`](services/frauddetector.yml) | 68 | 0 | 0 |
| [`proton`](services/proton.yml) | 67 | 0 | 23 |
| [`cloudformation`](services/cloudformation.yml) | 66 | 0 | 11 |
| [`backup`](services/backup.yml) | 66 | 0 | 2 |
| [`clouddirectory`](services/clouddirectory.yml) | 66 | 0 | 0 |
| [`iotsitewise`](services/iotsitewise.yml) | 65 | 3 | 1 |
| [`appstream`](services/appstream.yml) | 65 | 0 | 1 |
| [`elasticache`](services/elasticache.yml) | 65 | 0 | 0 |
| [`es`](services/es.yml) | 64 | 0 | 10 |
| [`route53`](services/route53.yml) | 64 | 0 | 0 |
| [`ds`](services/ds.yml) | 63 | 0 | 6 |
| [`route53resolver`](services/route53resolver.yml) | 63 | 0 | 0 |
| [`directconnect`](services/directconnect.yml) | 63 | 0 | 0 |
| [`lambda`](services/lambda.yml) | 61 | 2 | 5 |
| [`workspaces`](services/workspaces.yml) | 61 | 0 | 0 |
| [`autoscaling`](services/autoscaling.yml) | 61 | 0 | 0 |
| [`auditmanager`](services/auditmanager.yml) | 61 | 0 | 0 |
| [`personalize`](services/personalize.yml) | 60 | 5 | 0 |
| [`rekognition`](services/rekognition.yml) | 58 | 0 | 0 |
| [`guardduty`](services/guardduty.yml) | 58 | 0 | 0 |
| [`robomaker`](services/robomaker.yml) | 57 | 0 | 2 |
| [`medialive`](services/medialive.yml) | 57 | 0 | 0 |
| [`macie2`](services/macie2.yml) | 57 | 0 | 0 |
| [`securityhub`](services/securityhub.yml) | 56 | 0 | 12 |
| [`events`](services/events.yml) | 56 | 0 | 1 |
| [`kendra`](services/kendra.yml) | 55 | 0 | 0 |
| [`dms`](services/dms.yml) | 54 | 1 | 0 |
| [`elasticloadbalancing`](services/elasticloadbalancing.yml) | 54 | 0 | 1 |
| [`ecs`](services/ecs.yml) | 52 | 0 | 2 |
| [`organizations`](services/organizations.yml) | 52 | 0 | 0 |
| [`geo`](services/geo.yml) | 52 | 0 | 0 |
| [`elasticmapreduce`](services/elasticmapreduce.yml) | 51 | 1 | 26 |
| [`imagebuilder`](services/imagebuilder.yml) | 50 | 0 | 0 |
| [`kms`](services/kms.yml) | 49 | 1 | 3 |
| [`appsync`](services/appsync.yml) | 49 | 0 | 2 |
| [`dynamodb`](services/dynamodb.yml) | 48 | 6 | 12 |
| [`wafv2`](services/wafv2.yml) | 48 | 0 | 2 |
| [`sms-voice`](services/sms-voice.yml) | 48 | 0 | 0 |
| [`license-manager`](services/license-manager.yml) | 48 | 0 | 0 |
| [`elasticbeanstalk`](services/elasticbeanstalk.yml) | 47 | 0 | 3 |
| [`nimble`](services/nimble.yml) | 47 | 0 | 2 |
| [`codedeploy`](services/codedeploy.yml) | 47 | 0 | 1 |
| [`globalaccelerator`](services/globalaccelerator.yml) | 47 | 0 | 0 |
| [`forecast`](services/forecast.yml) | 46 | 0 | 0 |
| [`codebuild`](services/codebuild.yml) | 45 | 0 | 8 |
| [`workspaces-web`](services/workspaces-web.yml) | 44 | 0 | 0 |
| [`databrew`](services/databrew.yml) | 44 | 0 | 0 |
| [`lakeformation`](services/lakeformation.yml) | 42 | 2 | 1 |
| [`logs`](services/logs.yml) | 42 | 0 | 5 |
| [`datasync`](services/datasync.yml) | 42 | 0 | 0 |
| [`workdocs`](services/workdocs.yml) | 41 | 0 | 11 |
| [`transcribe`](services/transcribe.yml) | 41 | 0 | 2 |
| [`ecr`](services/ecr.yml) | 41 | 0 | 2 |
| [`sns`](services/sns.yml) | 39 | 1 | 0 |
| [`wellarchitected`](services/wellarchitected.yml) | 39 | 0 | 0 |
| [`resiliencehub`](services/resiliencehub.yml) | 39 | 0 | 0 |
| [`mechanicalturk`](services/mechanicalturk.yml) | 39 | 0 | 0 |
| [`codepipeline`](services/codepipeline.yml) | 39 | 0 | 0 |
| [`appmesh`](services/appmesh.yml) | 38 | 0 | 1 |
| [`profile`](services/profile.yml) | 38 | 0 | 0 |
| [`mediatailor`](services/mediatailor.yml) | 37 | 5 | 0 |
| [`swf`](services/swf.yml) | 37 | 0 | 12 |
| [`fsx`](services/fsx.yml) | 37 | 0 | 4 |
| [`iotevents`](services/iotevents.yml) | 37 | 0 | 1 |
| [`inspector`](services/inspector.yml) | 37 | 0 | 0 |
| [`amplify`](services/amplify.yml) | 37 | 0 | 0 |
| [`shield`](services/shield.yml) | 36 | 0 | 0 |
| [`cloudwatch`](services/cloudwatch.yml) | 36 | 0 | 0 |
| [`sms`](services/sms.yml) | 35 | 0 | 2 |
| [`athena`](services/athena.yml) | 35 | 0 | 1 |
| [`kafka`](services/kafka.yml) | 35 | 0 | 0 |
| [`iotthingsgraph`](services/iotthingsgraph.yml) | 35 | 0 | 0 |
| [`appconfig`](services/appconfig.yml) | 35 | 0 | 0 |
| [`codeartifact`](services/codeartifact.yml) | 34 | 0 | 4 |
| [`eks`](services/eks.yml) | 34 | 0 | 1 |
| [`iotanalytics`](services/iotanalytics.yml) | 34 | 0 | 0 |
| [`memorydb`](services/memorydb.yml) | 33 | 2 | 2 |
| [`panorama`](services/panorama.yml) | 33 | 0 | 31 |
| [`ce`](services/ce.yml) | 33 | 0 | 10 |
| [`worklink`](services/worklink.yml) | 33 | 0 | 1 |
| [`gamesparks`](services/gamesparks.yml) | 33 | 0 | 1 |
| [`glacier`](services/glacier.yml) | 33 | 0 | 0 |
| [`cloudhsm`](services/cloudhsm.yml) | 33 | 0 | 0 |
| [`transfer`](services/transfer.yml) | 32 | 0 | 0 |
| [`route53-recovery-readiness`](services/route53-recovery-readiness.yml) | 32 | 0 | 0 |
| [`evidently`](services/evidently.yml) | 32 | 0 | 0 |
| [`sso`](services/sso.yml) | 31 | 0 | 52 |
| [`kinesisanalytics`](services/kinesisanalytics.yml) | 31 | 0 | 1 |
| [`wisdom`](services/wisdom.yml) | 31 | 0 | 0 |
| [`schemas`](services/schemas.yml) | 31 | 0 | 0 |
| [`amplifybackend`](services/amplifybackend.yml) | 31 | 0 | 0 |
| [`elasticfilesystem`](services/elasticfilesystem.yml) | 30 | 0 | 5 |
| [`apprunner`](services/apprunner.yml) | 30 | 0 | 1 |
| [`route53domains`](services/route53domains.yml) | 30 | 0 | 0 |
| [`network-firewall`](services/network-firewall.yml) | 30 | 0 | 0 |
| [`mediaconnect`](services/mediaconnect.yml) | 30 | 0 | 0 |
| [`inspector2`](services/inspector2.yml) | 30 | 0 | 0 |
| [`fms`](services/fms.yml) | 30 | 0 | 0 |
| [`billingconductor`](services/billingconductor.yml) | 30 | 0 | 0 |
| [`drs`](services/drs.yml) | 29 | 0 | 38 |
| [`mgn`](services/mgn.yml) | 29 | 0 | 32 |
| [`dataexchange`](services/dataexchange.yml) | 29 | 0 | 2 |
| [`ssm-incidents`](services/ssm-incidents.yml) | 29 | 0 | 0 |
| [`kinesis`](services/kinesis.yml) | 29 | 0 | 0 |
| [`devops-guru`](services/devops-guru.yml) | 29 | 0 | 0 |
| [`cloudtrail`](services/cloudtrail.yml) | 29 | 0 | 0 |
| [`cloudsearch`](services/cloudsearch.yml) | 28 | 1 | 4 |
| [`lookoutmetrics`](services/lookoutmetrics.yml) | 28 | 0 | 1 |
| [`mediaconvert`](services/mediaconvert.yml) | 28 | 0 | 0 |
| [`machinelearning`](services/machinelearning.yml) | 28 | 0 | 0 |
| [`ivs`](services/ivs.yml) | 28 | 0 | 0 |
| [`access-analyzer`](services/access-analyzer.yml) | 28 | 0 | 0 |
| [`ssm-contacts`](services/ssm-contacts.yml) | 27 | 0 | 3 |
| [`kinesisvideo`](services/kinesisvideo.yml) | 27 | 0 | 3 |
| [`xray`](services/xray.yml) | 27 | 0 | 0 |
| [`applicationinsights`](services/applicationinsights.yml) | 27 | 0 | 0 |
| [`servicediscovery`](services/servicediscovery.yml) | 26 | 0 | 0 |
| [`mediastore`](services/mediastore.yml) | 26 | 0 | 0 |
| [`iottwinmaker`](services/iottwinmaker.yml) | 26 | 0 | 0 |
| [`iot1click`](services/iot1click.yml) | 26 | 0 | 0 |
| [`comprehendmedical`](services/comprehendmedical.yml) | 25 | 1 | 0 |
| [`snowball`](services/snowball.yml) | 25 | 0 | 0 |
| [`ram`](services/ram.yml) | 25 | 0 | 0 |
| [`groundstation`](services/groundstation.yml) | 25 | 0 | 0 |
| [`discovery`](services/discovery.yml) | 25 | 0 | 0 |
| [`batch`](services/batch.yml) | 24 | 0 | 0 |
| [`timestream`](services/timestream.yml) | 23 | 1 | 3 |
| [`outposts`](services/outposts.yml) | 23 | 0 | 2 |
| [`route53-recovery-control-config`](services/route53-recovery-control-config.yml) | 23 | 0 | 1 |
| [`states`](services/states.yml) | 23 | 0 | 0 |
| [`refactor-spaces`](services/refactor-spaces.yml) | 23 | 0 | 0 |
| [`managedblockchain`](services/managedblockchain.yml) | 23 | 0 | 0 |
| [`ecr-public`](services/ecr-public.yml) | 23 | 0 | 0 |
| [`cognito-identity`](services/cognito-identity.yml) | 23 | 0 | 0 |
| [`codeguru-profiler`](services/codeguru-profiler.yml) | 23 | 0 | 0 |
| [`acm-pca`](services/acm-pca.yml) | 23 | 0 | 0 |
| [`appflow`](services/appflow.yml) | 22 | 0 | 6 |
| [`lookoutvision`](services/lookoutvision.yml) | 22 | 0 | 3 |
| [`secretsmanager`](services/secretsmanager.yml) | 22 | 0 | 0 |
| [`mq`](services/mq.yml) | 22 | 0 | 0 |
| [`lookoutequipment`](services/lookoutequipment.yml) | 22 | 0 | 0 |
| [`qldb`](services/qldb.yml) | 21 | 0 | 13 |
| [`dax`](services/dax.yml) | 21 | 0 | 9 |
| [`voiceid`](services/voiceid.yml) | 21 | 0 | 2 |
| [`migrationhub-strategy`](services/migrationhub-strategy.yml) | 20 | 0 | 6 |
| [`detective`](services/detective.yml) | 20 | 0 | 5 |
| [`mgh`](services/mgh.yml) | 20 | 0 | 0 |
| [`datapipeline`](services/datapipeline.yml) | 19 | 0 | 2 |
| [`servicequotas`](services/servicequotas.yml) | 19 | 0 | 0 |
| [`opsworks-cm`](services/opsworks-cm.yml) | 19 | 0 | 0 |
| [`mediapackage`](services/mediapackage.yml) | 19 | 0 | 0 |
| [`codestar`](services/codestar.yml) | 18 | 0 | 4 |
| [`compute-optimizer`](services/compute-optimizer.yml) | 18 | 0 | 0 |
| [`sqs`](services/sqs.yml) | 17 | 3 | 0 |
| [`aps`](services/aps.yml) | 17 | 0 | 16 |
| [`cognito-sync`](services/cognito-sync.yml) | 17 | 0 | 2 |
| [`signer`](services/signer.yml) | 17 | 0 | 0 |
| [`mediapackage-vod`](services/mediapackage-vod.yml) | 17 | 0 | 0 |
| [`elastictranscoder`](services/elastictranscoder.yml) | 17 | 0 | 0 |
| [`fis`](services/fis.yml) | 16 | 0 | 3 |
| [`backup-gateway`](services/backup-gateway.yml) | 16 | 0 | 2 |
| [`resource-groups`](services/resource-groups.yml) | 16 | 0 | 1 |
| [`honeycode`](services/honeycode.yml) | 15 | 0 | 15 |
| [`app-integrations`](services/app-integrations.yml) | 15 | 0 | 4 |
| [`emr-containers`](services/emr-containers.yml) | 15 | 0 | 0 |
| [`acm`](services/acm.yml) | 15 | 0 | 0 |
| [`support`](services/support.yml) | 14 | 0 | 8 |
| [`codeguru-reviewer`](services/codeguru-reviewer.yml) | 14 | 0 | 3 |
| [`amplifyuibuilder`](services/amplifyuibuilder.yml) | 14 | 0 | 3 |
| [`serverlessrepo`](services/serverlessrepo.yml) | 14 | 0 | 1 |
| [`translate`](services/translate.yml) | 14 | 0 | 0 |
| [`iotdeviceadvisor`](services/iotdeviceadvisor.yml) | 14 | 0 | 0 |
| [`grafana`](services/grafana.yml) | 14 | 0 | 0 |
| [`cloud9`](services/cloud9.yml) | 13 | 0 | 16 |
| [`healthlake`](services/healthlake.yml) | 13 | 0 | 7 |
| [`synthetics`](services/synthetics.yml) | 13 | 0 | 0 |
| [`snow-device-management`](services/snow-device-management.yml) | 13 | 0 | 0 |
| [`health`](services/health.yml) | 13 | 0 | 0 |
| [`codestar-notifications`](services/codestar-notifications.yml) | 13 | 0 | 0 |
| [`braket`](services/braket.yml) | 13 | 0 | 0 |
| [`codestar-connections`](services/codestar-connections.yml) | 12 | 0 | 9 |
| [`kafkaconnect`](services/kafkaconnect.yml) | 12 | 0 | 0 |
| [`firehose`](services/firehose.yml) | 12 | 0 | 0 |
| [`aws-marketplace`](services/aws-marketplace.yml) | 11 | 0 | 28 |
| [`airflow`](services/airflow.yml) | 11 | 0 | 0 |
| [`textract`](services/textract.yml) | 10 | 0 | 0 |
| [`sdb`](services/sdb.yml) | 10 | 0 | 0 |
| [`rum`](services/rum.yml) | 10 | 0 | 0 |
| [`redshift-data`](services/redshift-data.yml) | 10 | 0 | 0 |
| [`application-autoscaling`](services/application-autoscaling.yml) | 10 | 0 | 0 |
| [`savingsplans`](services/savingsplans.yml) | 9 | 0 | 0 |
| [`polly`](services/polly.yml) | 9 | 0 | 0 |
| [`budgets`](services/budgets.yml) | 8 | 15 | 2 |
| [`iot`](services/iot.yml) | 8 | 3 | 244 |
| [`mobilehub`](services/mobilehub.yml) | 8 | 1 | 15 |
| [`finspace`](services/finspace.yml) | 8 | 0 | 7 |
| [`sts`](services/sts.yml) | 8 | 0 | 3 |
| [`tag`](services/tag.yml) | 8 | 0 | 0 |
| [`rbin`](services/rbin.yml) | 8 | 0 | 0 |
| [`iotfleethub`](services/iotfleethub.yml) | 8 | 0 | 0 |
| [`dlm`](services/dlm.yml) | 8 | 0 | 0 |
| [`macie`](services/macie.yml) | 7 | 0 | 0 |
| [`elastic-inference`](services/elastic-inference.yml) | 6 | 0 | 1 |
| [`rds-data`](services/rds-data.yml) | 6 | 0 | 0 |
| [`pi`](services/pi.yml) | 6 | 0 | 0 |
| [`importexport`](services/importexport.yml) | 6 | 0 | 0 |
| [`ebs`](services/ebs.yml) | 6 | 0 | 0 |
| [`autoscaling-plans`](services/autoscaling-plans.yml) | 6 | 0 | 0 |
| [`application-cost-profiler`](services/application-cost-profiler.yml) | 6 | 0 | 0 |
| [`s3-outposts`](services/s3-outposts.yml) | 4 | 0 | 29 |
| [`route53-recovery-cluster`](services/route53-recovery-cluster.yml) | 4 | 0 | 0 |
| [`identitystore`](services/identitystore.yml) | 4 | 0 | 0 |
| [`cur`](services/cur.yml) | 4 | 0 | 0 |
| [`account`](services/account.yml) | 3 | 0 | 3 |
| [`pricing`](services/pricing.yml) | 3 | 0 | 0 |
| [`cassandra`](services/cassandra.yml) | 2 | 11 | 7 |
| [`workmailmessageflow`](services/workmailmessageflow.yml) | 2 | 0 | 0 |
| [`marketplacecommerceanalytics`](services/marketplacecommerceanalytics.yml) | 2 | 0 | 0 |
| [`ec2-instance-connect`](services/ec2-instance-connect.yml) | 2 | 0 | 0 |
| [`mobileanalytics`](services/mobileanalytics.yml) | 1 | 0 | 2 |
| [`execute-api`](services/execute-api.yml) | 0 | 248 | 3 |
| [`apigateway`](services/apigateway.yml) | 0 | 152 | 9 |
| [`finspace-api`](services/finspace-api.yml) | 0 | 25 | 0 |
| [`cloudcontrolapi`](services/cloudcontrolapi.yml) | 0 | 8 | 0 |
| [`IoTSecuredTunneling`](services/IoTSecuredTunneling.yml) | 0 | 7 | 0 |
| [`awsssoportal`](services/awsssoportal.yml) | 0 | 4 | 0 |
| [`awsssooidc`](services/awsssooidc.yml) | 0 | 3 | 0 |
| [`sso-directory`](services/sso-directory.yml) | 0 | 0 | 52 |
| [`deepracer`](services/deepracer.yml) | 0 | 0 | 50 |
| [`iotroborunner`](services/iotroborunner.yml) | 0 | 0 | 49 |
| [`iotfleetwise`](services/iotfleetwise.yml) | 0 | 0 | 43 |
| [`sqlworkbench`](services/sqlworkbench.yml) | 0 | 0 | 39 |
| [`appmesh-preview`](services/appmesh-preview.yml) | 0 | 0 | 36 |
| [`migrationhub-orchestrator`](services/migrationhub-orchestrator.yml) | 0 | 0 | 31 |
| [`controltower`](services/controltower.yml) | 0 | 0 | 29 |
| [`trustedadvisor`](services/trustedadvisor.yml) | 0 | 0 | 26 |
| [`s3-object-lambda`](services/s3-object-lambda.yml) | 0 | 0 | 26 |
| [`deeplens`](services/deeplens.yml) | 0 | 0 | 24 |
| [`kafka-cluster`](services/kafka-cluster.yml) | 0 | 0 | 19 |
| [`deepcomposer`](services/deepcomposer.yml) | 0 | 0 | 18 |
| [`connect-campaigns`](services/connect-campaigns.yml) | 0 | 0 | 18 |
| [`chatbot`](services/chatbot.yml) | 0 | 0 | 17 |
| [`bugbust`](services/bugbust.yml) | 0 | 0 | 17 |
| [`dbqms`](services/dbqms.yml) | 0 | 0 | 13 |
| [`monitron`](services/monitron.yml) | 0 | 0 | 12 |
| [`identity-sync`](services/identity-sync.yml) | 0 | 0 | 12 |
| [`freertos`](services/freertos.yml) | 0 | 0 | 11 |
| [`elemental-activations`](services/elemental-activations.yml) | 0 | 0 | 10 |
| [`cloudshell`](services/cloudshell.yml) | 0 | 0 | 9 |
| [`launchwizard`](services/launchwizard.yml) | 0 | 0 | 8 |
| [`activate`](services/activate.yml) | 0 | 0 | 8 |
| [`elemental-appliances-software`](services/elemental-appliances-software.yml) | 0 | 0 | 7 |
| [`aws-portal`](services/aws-portal.yml) | 0 | 0 | 7 |
| [`ec2messages`](services/ec2messages.yml) | 0 | 0 | 6 |
| [`iot-device-tester`](services/iot-device-tester.yml) | 0 | 0 | 5 |
| [`groundtruthlabeling`](services/groundtruthlabeling.yml) | 0 | 0 | 5 |
| [`elemental-support-cases`](services/elemental-support-cases.yml) | 0 | 0 | 5 |
| [`aws-marketplace-management`](services/aws-marketplace-management.yml) | 0 | 0 | 5 |
| [`ssmmessages`](services/ssmmessages.yml) | 0 | 0 | 4 |
| [`iotjobsdata`](services/iotjobsdata.yml) | 0 | 0 | 4 |
| [`codedeploy-commands-secure`](services/codedeploy-commands-secure.yml) | 0 | 0 | 4 |
| [`artifact`](services/artifact.yml) | 0 | 0 | 4 |
| [`tiros`](services/tiros.yml) | 0 | 0 | 3 |
| [`ssm-guiconnect`](services/ssm-guiconnect.yml) | 0 | 0 | 3 |
| [`resource-explorer`](services/resource-explorer.yml) | 0 | 0 | 3 |
| [`awsconnector`](services/awsconnector.yml) | 0 | 0 | 3 |
| [`tax`](services/tax.yml) | 0 | 0 | 2 |
| [`sumerian`](services/sumerian.yml) | 0 | 0 | 2 |
| [`purchase-orders`](services/purchase-orders.yml) | 0 | 0 | 2 |
| [`wam`](services/wam.yml) | 0 | 0 | 1 |
| [`sustainability`](services/sustainability.yml) | 0 | 0 | 1 |
| [`serviceextract`](services/serviceextract.yml) | 0 | 0 | 1 |
| [`rhelkb`](services/rhelkb.yml) | 0 | 0 | 1 |
| [`rds-db`](services/rds-db.yml) | 0 | 0 | 1 |
| [`neptune-db`](services/neptune-db.yml) | 0 | 0 | 1 |
| [`mediaimport`](services/mediaimport.yml) | 0 | 0 | 1 |
| [`iq-permission`](services/iq-permission.yml) | 0 | 0 | 1 |
| [`iq`](services/iq.yml) | 0 | 0 | 1 |
| [`elemental-support-content`](services/elemental-support-content.yml) | 0 | 0 | 1 |
| [`codeguru`](services/codeguru.yml) | 0 | 0 | 1 |
| [`backup-storage`](services/backup-storage.yml) | 0 | 0 | 1 |
| [`arsenal`](services/arsenal.yml) | 0 | 0 | 1 |

Most common action prefixes:

| Prefix | Count |
| ------ | ----- |
| `List` | 1934 |
| `Get` | 1708 |
| `Describe` | 1495 |
| `Delete` | 1493 |
| `Create` | 1388 |
| `Update` | 1139 |
| `Put` | 358 |
| `Start` | 243 |
| `Tag` | 201 |
| `Untag` | 199 |

