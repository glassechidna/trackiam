package generator

import (
	"context"
	"fmt"
	"github.com/aws/aws-sdk-go/aws"
	"github.com/aws/aws-sdk-go/aws/session"
	"github.com/aws/aws-sdk-go/service/sns"
)

func Publish() {
	sess := session.Must(session.NewSession())
	api := sns.New(sess)

	_, err := api.PublishWithContext(context.Background(), &sns.PublishInput{
		Message:  aws.String("something changed"), // TODO: implement
		TopicArn: aws.String("arn:aws:sns:us-east-1:258739955926:trackiam"),
	})
	if err != nil {
		panic(fmt.Sprintf("%+v", err))
	}
}
