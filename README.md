# AWS IAM Tracker

This project collects IAM actions, AWS APIs and managed policies from various public sources.

You can explore the data collected using [the static site](https://glassechidna.github.io/trackiam/).

Collected data is published to the [policies](/policies) and [services](/services) folders in this repo.

Thank you to [alanakirby/aktion](https://github.com/alanakirby/aktion) for originally 
having this idea and being gracious about me shamelessly ripping it off.
	
# Stats

* Unique services: 331
* Unique actions: 13669
* Managed policies: 994

Most common managed policy name prefixes:

| Policy ARN | Count |
| ------ | ----- |
| `arn:aws:iam::aws:policy/AWS*` | 281 |
| `arn:aws:iam::aws:policy/Amazon*` | 257 |
| `arn:aws:iam::aws:policy/aws-service-role/*` | 210 |
| `arn:aws:iam::aws:policy/service-role/*` | 154 |
| `arn:aws:iam::aws:policy/job-function/*` | 7 |
| Other | 85 |

The following table summarises the AWS APIs. 

* The first column is the name of the API as far as IAM policies are concerned. 
* The second column is IAM actions that exactly match the names of invokable 
  APIs exposed by AWS.
* The third column is invokable APIs that don't have a corresponding IAM action.
* The fourth column is IAM actions that don't have a corresponding invokable API.

| Service | Action/API pairs | APIs without actions | Actions without APIs |
| ------ | ----- | ----- | ----- |
| [`ec2`](services/ec2.yml) | 542 | 5 | 9 |
| [`sagemaker`](services/sagemaker.yml) | 277 | 1 | 5 |
| [`chime`](services/chime.yml) | 216 | 1 | 50 |
| [`glue`](services/glue.yml) | 181 | 5 | 3 |
| [`connect`](services/connect.yml) | 162 | 1 | 6 |
| [`iam`](services/iam.yml) | 158 | 0 | 1 |
| [`lightsail`](services/lightsail.yml) | 155 | 0 | 0 |
| [`ses`](services/ses.yml) | 143 | 0 | 0 |
| [`rds`](services/rds.yml) | 137 | 0 | 5 |
| [`ssm`](services/ssm.yml) | 135 | 0 | 10 |
| [`quicksight`](services/quicksight.yml) | 120 | 0 | 26 |
| [`redshift`](services/redshift.yml) | 119 | 0 | 18 |
| [`mobiletargeting`](services/mobiletargeting.yml) | 119 | 0 | 1 |
| [`greengrass`](services/greengrass.yml) | 111 | 0 | 1 |
| [`servicecatalog`](services/servicecatalog.yml) | 109 | 0 | 0 |
| [`lex`](services/lex.yml) | 104 | 6 | 7 |
| [`cognito-idp`](services/cognito-idp.yml) | 101 | 0 | 4 |
| [`iotwireless`](services/iotwireless.yml) | 98 | 0 | 1 |
| [`cloudfront`](services/cloudfront.yml) | 97 | 1 | 7 |
| [`gamelift`](services/gamelift.yml) | 95 | 0 | 0 |
| [`a4b`](services/a4b.yml) | 93 | 0 | 3 |
| [`storagegateway`](services/storagegateway.yml) | 90 | 0 | 1 |
| [`config`](services/config.yml) | 86 | 3 | 0 |
| [`networkmanager`](services/networkmanager.yml) | 85 | 0 | 0 |
| [`s3`](services/s3.yml) | 83 | 58 | 45 |
| [`waf-regional`](services/waf-regional.yml) | 81 | 0 | 0 |
| [`workmail`](services/workmail.yml) | 80 | 0 | 51 |
| [`codecommit`](services/codecommit.yml) | 77 | 0 | 11 |
| [`waf`](services/waf.yml) | 77 | 0 | 0 |
| [`devicefarm`](services/devicefarm.yml) | 77 | 0 | 0 |
| [`proton`](services/proton.yml) | 75 | 0 | 23 |
| [`opsworks`](services/opsworks.yml) | 74 | 0 | 0 |
| [`comprehend`](services/comprehend.yml) | 73 | 0 | 0 |
| [`iotsitewise`](services/iotsitewise.yml) | 71 | 2 | 1 |
| [`route53`](services/route53.yml) | 70 | 0 | 0 |
| [`frauddetector`](services/frauddetector.yml) | 68 | 0 | 0 |
| [`ds`](services/ds.yml) | 67 | 0 | 6 |
| [`cloudformation`](services/cloudformation.yml) | 66 | 0 | 11 |
| [`backup`](services/backup.yml) | 66 | 0 | 2 |
| [`macie2`](services/macie2.yml) | 66 | 0 | 0 |
| [`clouddirectory`](services/clouddirectory.yml) | 66 | 0 | 0 |
| [`forecast`](services/forecast.yml) | 65 | 0 | 5 |
| [`appstream`](services/appstream.yml) | 65 | 0 | 1 |
| [`personalize`](services/personalize.yml) | 65 | 0 | 0 |
| [`elasticache`](services/elasticache.yml) | 65 | 0 | 0 |
| [`es`](services/es.yml) | 64 | 9 | 10 |
| [`workspaces`](services/workspaces.yml) | 63 | 0 | 1 |
| [`route53resolver`](services/route53resolver.yml) | 63 | 0 | 0 |
| [`rekognition`](services/rekognition.yml) | 63 | 0 | 0 |
| [`directconnect`](services/directconnect.yml) | 63 | 0 | 0 |
| [`guardduty`](services/guardduty.yml) | 61 | 4 | 0 |
| [`lambda`](services/lambda.yml) | 61 | 2 | 5 |
| [`autoscaling`](services/autoscaling.yml) | 61 | 0 | 0 |
| [`auditmanager`](services/auditmanager.yml) | 61 | 0 | 0 |
| [`medialive`](services/medialive.yml) | 59 | 0 | 0 |
| [`transfer`](services/transfer.yml) | 58 | 0 | 0 |
| [`robomaker`](services/robomaker.yml) | 57 | 0 | 2 |
| [`securityhub`](services/securityhub.yml) | 56 | 0 | 12 |
| [`events`](services/events.yml) | 56 | 0 | 1 |
| [`dms`](services/dms.yml) | 55 | 10 | 0 |
| [`kendra`](services/kendra.yml) | 55 | 5 | 0 |
| [`elasticloadbalancing`](services/elasticloadbalancing.yml) | 54 | 0 | 1 |
| [`geo`](services/geo.yml) | 52 | 1 | 0 |
| [`ecs`](services/ecs.yml) | 52 | 0 | 2 |
| [`organizations`](services/organizations.yml) | 52 | 0 | 0 |
| [`dynamodb`](services/dynamodb.yml) | 51 | 6 | 12 |
| [`elasticmapreduce`](services/elasticmapreduce.yml) | 51 | 1 | 26 |
| [`workspaces-web`](services/workspaces-web.yml) | 51 | 0 | 0 |
| [`appsync`](services/appsync.yml) | 50 | 0 | 2 |
| [`imagebuilder`](services/imagebuilder.yml) | 50 | 0 | 0 |
| [`kms`](services/kms.yml) | 49 | 1 | 3 |
| [`globalaccelerator`](services/globalaccelerator.yml) | 49 | 0 | 0 |
| [`iotfleetwise`](services/iotfleetwise.yml) | 48 | 2 | 0 |
| [`wafv2`](services/wafv2.yml) | 48 | 0 | 2 |
| [`sms-voice`](services/sms-voice.yml) | 48 | 0 | 0 |
| [`license-manager`](services/license-manager.yml) | 48 | 0 | 0 |
| [`elasticbeanstalk`](services/elasticbeanstalk.yml) | 47 | 0 | 3 |
| [`nimble`](services/nimble.yml) | 47 | 0 | 2 |
| [`codedeploy`](services/codedeploy.yml) | 47 | 0 | 1 |
| [`codebuild`](services/codebuild.yml) | 45 | 0 | 8 |
| [`appconfig`](services/appconfig.yml) | 45 | 0 | 0 |
| [`datasync`](services/datasync.yml) | 44 | 0 | 0 |
| [`databrew`](services/databrew.yml) | 44 | 0 | 0 |
| [`logs`](services/logs.yml) | 42 | 3 | 5 |
| [`lakeformation`](services/lakeformation.yml) | 42 | 3 | 1 |
| [`wellarchitected`](services/wellarchitected.yml) | 42 | 0 | 0 |
| [`mediatailor`](services/mediatailor.yml) | 42 | 0 | 0 |
| [`sns`](services/sns.yml) | 41 | 1 | 0 |
| [`workdocs`](services/workdocs.yml) | 41 | 0 | 14 |
| [`fsx`](services/fsx.yml) | 41 | 0 | 4 |
| [`transcribe`](services/transcribe.yml) | 41 | 0 | 2 |
| [`ecr`](services/ecr.yml) | 41 | 0 | 2 |
| [`resiliencehub`](services/resiliencehub.yml) | 39 | 0 | 0 |
| [`mechanicalturk`](services/mechanicalturk.yml) | 39 | 0 | 0 |
| [`codepipeline`](services/codepipeline.yml) | 39 | 0 | 0 |
| [`iotevents`](services/iotevents.yml) | 38 | 0 | 1 |
| [`appmesh`](services/appmesh.yml) | 38 | 0 | 1 |
| [`profile`](services/profile.yml) | 38 | 0 | 0 |
| [`evidently`](services/evidently.yml) | 38 | 0 | 0 |
| [`cloudwatch`](services/cloudwatch.yml) | 38 | 0 | 0 |
| [`sso`](services/sso.yml) | 37 | 0 | 52 |
| [`swf`](services/swf.yml) | 37 | 0 | 12 |
| [`athena`](services/athena.yml) | 37 | 0 | 1 |
| [`redshift-serverless`](services/redshift-serverless.yml) | 37 | 0 | 0 |
| [`inspector`](services/inspector.yml) | 37 | 0 | 0 |
| [`amplify`](services/amplify.yml) | 37 | 0 | 0 |
| [`codeartifact`](services/codeartifact.yml) | 36 | 0 | 4 |
| [`shield`](services/shield.yml) | 36 | 0 | 0 |
| [`kafka`](services/kafka.yml) | 36 | 0 | 0 |
| [`ce`](services/ce.yml) | 35 | 0 | 10 |
| [`sms`](services/sms.yml) | 35 | 0 | 2 |
| [`apprunner`](services/apprunner.yml) | 35 | 0 | 1 |
| [`memorydb`](services/memorydb.yml) | 35 | 0 | 0 |
| [`eks`](services/eks.yml) | 34 | 0 | 1 |
| [`iotanalytics`](services/iotanalytics.yml) | 34 | 0 | 0 |
| [`panorama`](services/panorama.yml) | 33 | 1 | 31 |
| [`mgn`](services/mgn.yml) | 33 | 0 | 34 |
| [`worklink`](services/worklink.yml) | 33 | 0 | 1 |
| [`gamesparks`](services/gamesparks.yml) | 33 | 0 | 1 |
| [`lookoutequipment`](services/lookoutequipment.yml) | 33 | 0 | 0 |
| [`glacier`](services/glacier.yml) | 33 | 0 | 0 |
| [`cloudhsm`](services/cloudhsm.yml) | 33 | 0 | 0 |
| [`drs`](services/drs.yml) | 32 | 0 | 41 |
| [`kinesisvideo`](services/kinesisvideo.yml) | 32 | 0 | 3 |
| [`route53-recovery-readiness`](services/route53-recovery-readiness.yml) | 32 | 0 | 0 |
| [`m2`](services/m2.yml) | 32 | 0 | 0 |
| [`inspector2`](services/inspector2.yml) | 32 | 0 | 0 |
| [`cloudtrail`](services/cloudtrail.yml) | 31 | 7 | 5 |
| [`kinesisanalytics`](services/kinesisanalytics.yml) | 31 | 0 | 1 |
| [`wisdom`](services/wisdom.yml) | 31 | 0 | 0 |
| [`schemas`](services/schemas.yml) | 31 | 0 | 0 |
| [`network-firewall`](services/network-firewall.yml) | 31 | 0 | 0 |
| [`devops-guru`](services/devops-guru.yml) | 31 | 0 | 0 |
| [`billingconductor`](services/billingconductor.yml) | 31 | 0 | 0 |
| [`amplifybackend`](services/amplifybackend.yml) | 31 | 0 | 0 |
| [`fms`](services/fms.yml) | 30 | 8 | 0 |
| [`elasticfilesystem`](services/elasticfilesystem.yml) | 30 | 0 | 5 |
| [`route53domains`](services/route53domains.yml) | 30 | 0 | 0 |
| [`mediaconnect`](services/mediaconnect.yml) | 30 | 0 | 0 |
| [`lookoutmetrics`](services/lookoutmetrics.yml) | 30 | 0 | 0 |
| [`dataexchange`](services/dataexchange.yml) | 29 | 0 | 2 |
| [`ssm-incidents`](services/ssm-incidents.yml) | 29 | 0 | 0 |
| [`kinesis`](services/kinesis.yml) | 29 | 0 | 0 |
| [`cases`](services/cases.yml) | 29 | 0 | 0 |
| [`cloudsearch`](services/cloudsearch.yml) | 28 | 1 | 4 |
| [`migrationhub-orchestrator`](services/migrationhub-orchestrator.yml) | 28 | 0 | 3 |
| [`mediaconvert`](services/mediaconvert.yml) | 28 | 0 | 0 |
| [`machinelearning`](services/machinelearning.yml) | 28 | 0 | 0 |
| [`ivs`](services/ivs.yml) | 28 | 0 | 0 |
| [`access-analyzer`](services/access-analyzer.yml) | 28 | 0 | 0 |
| [`ssm-contacts`](services/ssm-contacts.yml) | 27 | 0 | 1 |
| [`xray`](services/xray.yml) | 27 | 0 | 0 |
| [`applicationinsights`](services/applicationinsights.yml) | 27 | 0 | 0 |
| [`outposts`](services/outposts.yml) | 26 | 0 | 2 |
| [`servicediscovery`](services/servicediscovery.yml) | 26 | 0 | 0 |
| [`rolesanywhere`](services/rolesanywhere.yml) | 26 | 0 | 0 |
| [`mediastore`](services/mediastore.yml) | 26 | 0 | 0 |
| [`iottwinmaker`](services/iottwinmaker.yml) | 26 | 0 | 0 |
| [`iot1click`](services/iot1click.yml) | 26 | 0 | 0 |
| [`groundstation`](services/groundstation.yml) | 25 | 5 | 0 |
| [`comprehendmedical`](services/comprehendmedical.yml) | 25 | 1 | 0 |
| [`discovery`](services/discovery.yml) | 25 | 0 | 1 |
| [`snowball`](services/snowball.yml) | 25 | 0 | 0 |
| [`ram`](services/ram.yml) | 25 | 0 | 0 |
| [`detective`](services/detective.yml) | 24 | 0 | 5 |
| [`refactor-spaces`](services/refactor-spaces.yml) | 24 | 0 | 0 |
| [`batch`](services/batch.yml) | 24 | 0 | 0 |
| [`managedblockchain`](services/managedblockchain.yml) | 23 | 4 | 0 |
| [`timestream`](services/timestream.yml) | 23 | 1 | 3 |
| [`route53-recovery-control-config`](services/route53-recovery-control-config.yml) | 23 | 0 | 1 |
| [`states`](services/states.yml) | 23 | 0 | 0 |
| [`ecr-public`](services/ecr-public.yml) | 23 | 0 | 0 |
| [`cognito-identity`](services/cognito-identity.yml) | 23 | 0 | 0 |
| [`codeguru-profiler`](services/codeguru-profiler.yml) | 23 | 0 | 0 |
| [`acm-pca`](services/acm-pca.yml) | 23 | 0 | 0 |
| [`appflow`](services/appflow.yml) | 22 | 0 | 6 |
| [`lookoutvision`](services/lookoutvision.yml) | 22 | 0 | 3 |
| [`secretsmanager`](services/secretsmanager.yml) | 22 | 0 | 0 |
| [`mq`](services/mq.yml) | 22 | 0 | 0 |
| [`connect-campaigns`](services/connect-campaigns.yml) | 22 | 0 | 0 |
| [`private-networks`](services/private-networks.yml) | 21 | 4 | 0 |
| [`aps`](services/aps.yml) | 21 | 0 | 16 |
| [`qldb`](services/qldb.yml) | 21 | 0 | 14 |
| [`dax`](services/dax.yml) | 21 | 0 | 9 |
| [`voiceid`](services/voiceid.yml) | 21 | 0 | 2 |
| [`synthetics`](services/synthetics.yml) | 21 | 0 | 0 |
| [`migrationhub-strategy`](services/migrationhub-strategy.yml) | 20 | 0 | 8 |
| [`mgh`](services/mgh.yml) | 20 | 0 | 0 |
| [`datapipeline`](services/datapipeline.yml) | 19 | 0 | 2 |
| [`backup-gateway`](services/backup-gateway.yml) | 19 | 0 | 2 |
| [`servicequotas`](services/servicequotas.yml) | 19 | 0 | 0 |
| [`resource-explorer-2`](services/resource-explorer-2.yml) | 19 | 0 | 0 |
| [`opsworks-cm`](services/opsworks-cm.yml) | 19 | 0 | 0 |
| [`mediapackage`](services/mediapackage.yml) | 19 | 0 | 0 |
| [`identitystore`](services/identitystore.yml) | 19 | 0 | 0 |
| [`emr-containers`](services/emr-containers.yml) | 19 | 0 | 0 |
| [`codestar`](services/codestar.yml) | 18 | 0 | 4 |
| [`translate`](services/translate.yml) | 18 | 0 | 0 |
| [`compute-optimizer`](services/compute-optimizer.yml) | 18 | 0 | 0 |
| [`sqs`](services/sqs.yml) | 17 | 3 | 0 |
| [`cognito-sync`](services/cognito-sync.yml) | 17 | 0 | 2 |
| [`signer`](services/signer.yml) | 17 | 0 | 0 |
| [`rum`](services/rum.yml) | 17 | 0 | 0 |
| [`mediapackage-vod`](services/mediapackage-vod.yml) | 17 | 0 | 0 |
| [`elastictranscoder`](services/elastictranscoder.yml) | 17 | 0 | 0 |
| [`fis`](services/fis.yml) | 16 | 0 | 3 |
| [`resource-groups`](services/resource-groups.yml) | 16 | 0 | 1 |
| [`grafana`](services/grafana.yml) | 16 | 0 | 0 |
| [`honeycode`](services/honeycode.yml) | 15 | 0 | 15 |
| [`app-integrations`](services/app-integrations.yml) | 15 | 0 | 4 |
| [`emr-serverless`](services/emr-serverless.yml) | 15 | 0 | 0 |
| [`acm`](services/acm.yml) | 15 | 0 | 0 |
| [`amplifyuibuilder`](services/amplifyuibuilder.yml) | 14 | 8 | 3 |
| [`support`](services/support.yml) | 14 | 0 | 8 |
| [`codeguru-reviewer`](services/codeguru-reviewer.yml) | 14 | 0 | 3 |
| [`serverlessrepo`](services/serverlessrepo.yml) | 14 | 0 | 1 |
| [`iotdeviceadvisor`](services/iotdeviceadvisor.yml) | 14 | 0 | 0 |
| [`cloud9`](services/cloud9.yml) | 13 | 0 | 16 |
| [`healthlake`](services/healthlake.yml) | 13 | 0 | 7 |
| [`snow-device-management`](services/snow-device-management.yml) | 13 | 0 | 0 |
| [`health`](services/health.yml) | 13 | 0 | 0 |
| [`codestar-notifications`](services/codestar-notifications.yml) | 13 | 0 | 0 |
| [`braket`](services/braket.yml) | 13 | 0 | 0 |
| [`codestar-connections`](services/codestar-connections.yml) | 12 | 0 | 9 |
| [`kafkaconnect`](services/kafkaconnect.yml) | 12 | 0 | 0 |
| [`ivschat`](services/ivschat.yml) | 12 | 0 | 0 |
| [`firehose`](services/firehose.yml) | 12 | 0 | 0 |
| [`aws-marketplace`](services/aws-marketplace.yml) | 11 | 0 | 31 |
| [`airflow`](services/airflow.yml) | 11 | 0 | 0 |
| [`supportapp`](services/supportapp.yml) | 10 | 0 | 3 |
| [`textract`](services/textract.yml) | 10 | 0 | 0 |
| [`sdb`](services/sdb.yml) | 10 | 0 | 0 |
| [`redshift-data`](services/redshift-data.yml) | 10 | 0 | 0 |
| [`license-manager-user-subscriptions`](services/license-manager-user-subscriptions.yml) | 10 | 0 | 0 |
| [`application-autoscaling`](services/application-autoscaling.yml) | 10 | 0 | 0 |
| [`savingsplans`](services/savingsplans.yml) | 9 | 0 | 0 |
| [`polly`](services/polly.yml) | 9 | 0 | 0 |
| [`budgets`](services/budgets.yml) | 8 | 15 | 2 |
| [`iot`](services/iot.yml) | 8 | 3 | 245 |
| [`mobilehub`](services/mobilehub.yml) | 8 | 1 | 15 |
| [`finspace`](services/finspace.yml) | 8 | 0 | 7 |
| [`sts`](services/sts.yml) | 8 | 0 | 3 |
| [`tag`](services/tag.yml) | 8 | 0 | 0 |
| [`rbin`](services/rbin.yml) | 8 | 0 | 0 |
| [`iotfleethub`](services/iotfleethub.yml) | 8 | 0 | 0 |
| [`dlm`](services/dlm.yml) | 8 | 0 | 0 |
| [`elastic-inference`](services/elastic-inference.yml) | 6 | 0 | 1 |
| [`rds-data`](services/rds-data.yml) | 6 | 0 | 0 |
| [`pi`](services/pi.yml) | 6 | 0 | 0 |
| [`importexport`](services/importexport.yml) | 6 | 0 | 0 |
| [`ebs`](services/ebs.yml) | 6 | 0 | 0 |
| [`autoscaling-plans`](services/autoscaling-plans.yml) | 6 | 0 | 0 |
| [`application-cost-profiler`](services/application-cost-profiler.yml) | 6 | 0 | 0 |
| [`account`](services/account.yml) | 5 | 0 | 3 |
| [`s3-outposts`](services/s3-outposts.yml) | 4 | 0 | 29 |
| [`controltower`](services/controltower.yml) | 4 | 0 | 29 |
| [`route53-recovery-cluster`](services/route53-recovery-cluster.yml) | 4 | 0 | 0 |
| [`cur`](services/cur.yml) | 4 | 0 | 0 |
| [`pricing`](services/pricing.yml) | 3 | 0 | 0 |
| [`cassandra`](services/cassandra.yml) | 2 | 11 | 7 |
| [`workmailmessageflow`](services/workmailmessageflow.yml) | 2 | 0 | 0 |
| [`marketplacecommerceanalytics`](services/marketplacecommerceanalytics.yml) | 2 | 0 | 0 |
| [`ec2-instance-connect`](services/ec2-instance-connect.yml) | 2 | 0 | 0 |
| [`mobileanalytics`](services/mobileanalytics.yml) | 1 | 0 | 2 |
| [`execute-api`](services/execute-api.yml) | 0 | 248 | 3 |
| [`apigateway`](services/apigateway.yml) | 0 | 152 | 9 |
| [`iotthingsgraph`](services/iotthingsgraph.yml) | 0 | 35 | 0 |
| [`finspace-api`](services/finspace-api.yml) | 0 | 31 | 0 |
| [`backup-storage`](services/backup-storage.yml) | 0 | 9 | 1 |
| [`cloudcontrolapi`](services/cloudcontrolapi.yml) | 0 | 8 | 0 |
| [`IoTSecuredTunneling`](services/IoTSecuredTunneling.yml) | 0 | 8 | 0 |
| [`macie`](services/macie.yml) | 0 | 7 | 0 |
| [`awsssoportal`](services/awsssoportal.yml) | 0 | 4 | 0 |
| [`awsssooidc`](services/awsssooidc.yml) | 0 | 3 | 0 |
| [`sqlworkbench`](services/sqlworkbench.yml) | 0 | 0 | 64 |
| [`sso-directory`](services/sso-directory.yml) | 0 | 0 | 52 |
| [`deepracer`](services/deepracer.yml) | 0 | 0 | 50 |
| [`iotroborunner`](services/iotroborunner.yml) | 0 | 0 | 49 |
| [`appmesh-preview`](services/appmesh-preview.yml) | 0 | 0 | 36 |
| [`neptune-db`](services/neptune-db.yml) | 0 | 0 | 32 |
| [`trustedadvisor`](services/trustedadvisor.yml) | 0 | 0 | 29 |
| [`s3-object-lambda`](services/s3-object-lambda.yml) | 0 | 0 | 26 |
| [`deeplens`](services/deeplens.yml) | 0 | 0 | 24 |
| [`kafka-cluster`](services/kafka-cluster.yml) | 0 | 0 | 19 |
| [`vendor-insights`](services/vendor-insights.yml) | 0 | 0 | 18 |
| [`deepcomposer`](services/deepcomposer.yml) | 0 | 0 | 18 |
| [`elemental-appliances-software`](services/elemental-appliances-software.yml) | 0 | 0 | 17 |
| [`chatbot`](services/chatbot.yml) | 0 | 0 | 17 |
| [`bugbust`](services/bugbust.yml) | 0 | 0 | 17 |
| [`dbqms`](services/dbqms.yml) | 0 | 0 | 13 |
| [`scheduler`](services/scheduler.yml) | 0 | 0 | 12 |
| [`sagemaker-groundtruth-synthetic`](services/sagemaker-groundtruth-synthetic.yml) | 0 | 0 | 12 |
| [`monitron`](services/monitron.yml) | 0 | 0 | 12 |
| [`identity-sync`](services/identity-sync.yml) | 0 | 0 | 12 |
| [`freertos`](services/freertos.yml) | 0 | 0 | 11 |
| [`elemental-activations`](services/elemental-activations.yml) | 0 | 0 | 10 |
| [`cloudshell`](services/cloudshell.yml) | 0 | 0 | 9 |
| [`launchwizard`](services/launchwizard.yml) | 0 | 0 | 8 |
| [`activate`](services/activate.yml) | 0 | 0 | 8 |
| [`aws-portal`](services/aws-portal.yml) | 0 | 0 | 7 |
| [`ec2messages`](services/ec2messages.yml) | 0 | 0 | 6 |
| [`tiros`](services/tiros.yml) | 0 | 0 | 5 |
| [`iot-device-tester`](services/iot-device-tester.yml) | 0 | 0 | 5 |
| [`groundtruthlabeling`](services/groundtruthlabeling.yml) | 0 | 0 | 5 |
| [`elemental-support-cases`](services/elemental-support-cases.yml) | 0 | 0 | 5 |
| [`aws-marketplace-management`](services/aws-marketplace-management.yml) | 0 | 0 | 5 |
| [`ssmmessages`](services/ssmmessages.yml) | 0 | 0 | 4 |
| [`iotjobsdata`](services/iotjobsdata.yml) | 0 | 0 | 4 |
| [`codedeploy-commands-secure`](services/codedeploy-commands-secure.yml) | 0 | 0 | 4 |
| [`artifact`](services/artifact.yml) | 0 | 0 | 4 |
| [`a2c`](services/a2c.yml) | 0 | 0 | 4 |
| [`supportplans`](services/supportplans.yml) | 0 | 0 | 3 |
| [`ssm-guiconnect`](services/ssm-guiconnect.yml) | 0 | 0 | 3 |
| [`resource-explorer`](services/resource-explorer.yml) | 0 | 0 | 3 |
| [`identitystore-auth`](services/identitystore-auth.yml) | 0 | 0 | 3 |
| [`awsconnector`](services/awsconnector.yml) | 0 | 0 | 3 |
| [`tax`](services/tax.yml) | 0 | 0 | 2 |
| [`sumerian`](services/sumerian.yml) | 0 | 0 | 2 |
| [`purchase-orders`](services/purchase-orders.yml) | 0 | 0 | 2 |
| [`wam`](services/wam.yml) | 0 | 0 | 1 |
| [`sustainability`](services/sustainability.yml) | 0 | 0 | 1 |
| [`serviceextract`](services/serviceextract.yml) | 0 | 0 | 1 |
| [`rhelkb`](services/rhelkb.yml) | 0 | 0 | 1 |
| [`rds-db`](services/rds-db.yml) | 0 | 0 | 1 |
| [`mediaimport`](services/mediaimport.yml) | 0 | 0 | 1 |
| [`iq-permission`](services/iq-permission.yml) | 0 | 0 | 1 |
| [`iq`](services/iq.yml) | 0 | 0 | 1 |
| [`elemental-support-content`](services/elemental-support-content.yml) | 0 | 0 | 1 |
| [`codeguru`](services/codeguru.yml) | 0 | 0 | 1 |
| [`billing`](services/billing.yml) | 0 | 0 | 1 |
| [`arsenal`](services/arsenal.yml) | 0 | 0 | 1 |

Most common action prefixes:

| Prefix | Count |
| ------ | ----- |
| `List` | 2103 |
| `Get` | 1848 |
| `Delete` | 1587 |
| `Describe` | 1539 |
| `Create` | 1483 |
| `Update` | 1226 |
| `Put` | 377 |
| `Start` | 266 |
| `Tag` | 213 |
| `Untag` | 211 |

