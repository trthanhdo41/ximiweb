import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { HiChevronDown, HiChevronUp } from 'react-icons/hi2';

const FAQSection = styled(motion.section)`
  padding: ${props => props.theme.spacing['5xl']} 0;
  background: ${props => props.theme.colors.background};
`;

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 ${props => props.theme.spacing.lg};
`;

const SectionHeader = styled(motion.div)`
  text-align: center;
  margin-bottom: ${props => props.theme.spacing['4xl']};
`;

const SectionTitle = styled(motion.h2)`
  font-size: ${props => props.theme.typography.fontSize['5xl']};
  font-weight: ${props => props.theme.typography.fontWeight.extrabold};
  color: ${props => props.theme.colors.textPrimary};
  margin-bottom: ${props => props.theme.spacing.lg};
  line-height: ${props => props.theme.typography.lineHeight.tight};

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    font-size: ${props => props.theme.typography.fontSize['4xl']};
  }
`;

const SectionSubtitle = styled(motion.p)`
  font-size: ${props => props.theme.typography.fontSize.lg};
  color: ${props => props.theme.colors.textSecondary};
  max-width: 600px;
  margin: 0 auto;
  line-height: ${props => props.theme.typography.lineHeight.relaxed};
`;

const FAQContainer = styled(motion.div)`
  max-width: 800px;
  margin: 0 auto;
`;

const FAQItem = styled(motion.div)`
  background: ${props => props.theme.colors.backgroundSecondary};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.xl};
  margin-bottom: ${props => props.theme.spacing.lg};
  overflow: hidden;
  transition: all 0.3s ease;

  &:hover {
    border-color: ${props => props.theme.colors.primary};
    box-shadow: ${props => props.theme.shadows.md};
  }
`;

const FAQQuestion = styled(motion.button)`
  width: 100%;
  padding: ${props => props.theme.spacing.xl};
  background: none;
  border: none;
  text-align: left;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${props => props.theme.spacing.md};
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.theme.colors.background};
  }
`;

const QuestionText = styled.h3`
  font-size: ${props => props.theme.typography.fontSize.lg};
  font-weight: ${props => props.theme.typography.fontWeight.semibold};
  color: ${props => props.theme.colors.textPrimary};
  margin: 0;
  flex: 1;
`;

const QuestionIcon = styled(motion.div)`
  color: ${props => props.theme.colors.primary};
  flex-shrink: 0;
`;

const FAQAnswer = styled(motion.div)`
  padding: ${props => props.theme.spacing.lg} ${props => props.theme.spacing.xl} ${props => props.theme.spacing.xl};
  border-top: 1px solid ${props => props.theme.colors.border};
  overflow: hidden;
`;

const AnswerText = styled.p`
  font-size: ${props => props.theme.typography.fontSize.base};
  color: ${props => props.theme.colors.textSecondary};
  line-height: ${props => props.theme.typography.lineHeight.relaxed};
  margin: 0;
`;

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Thời gian bàn giao dự án là bao lâu?",
      answer: "Website cơ bản: 3-7 ngày, Website phức tạp: 7-14 ngày, Mobile App: 2-4 tuần, AI Solutions: 1-2 tháng. Chúng tôi cam kết bàn giao đúng hẹn và thông báo trước nếu có thay đổi."
    },
    {
      question: "Giá cả có minh bạch không? Có phí ẩn không?",
      answer: "Giá cả hoàn toàn minh bạch, không có phí ẩn. Bạn sẽ nhận được báo giá chi tiết trước khi bắt đầu dự án. Chỉ thanh toán khi hài lòng với kết quả."
    },
    {
      question: "Có bảo hành không? Thời gian bảo hành bao lâu?",
      answer: "Chúng tôi bảo hành 12 tháng cho tất cả dự án. Trong thời gian bảo hành, chúng tôi hỗ trợ sửa lỗi miễn phí và cập nhật tính năng cơ bản."
    },
    {
      question: "Website có responsive trên mobile không?",
      answer: "Tất cả website của chúng tôi đều responsive 100%, tương thích hoàn hảo trên mọi thiết bị: desktop, tablet, mobile. Giao diện sẽ tự động điều chỉnh theo kích thước màn hình."
    },
    {
      question: "Có hỗ trợ SEO không?",
      answer: "Có, chúng tôi tối ưu SEO cơ bản cho tất cả website bao gồm: meta tags, sitemap, robots.txt, tốc độ tải nhanh, cấu trúc URL thân thiện với Google."
    },
    {
      question: "Có thể chỉnh sửa website sau khi bàn giao không?",
      answer: "Có, chúng tôi cung cấp admin panel dễ sử dụng để bạn tự chỉnh sửa nội dung. Nếu cần hỗ trợ kỹ thuật, chúng tôi sẽ hướng dẫn miễn phí trong thời gian bảo hành."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <FAQSection id="faq">
      <Container>
        <SectionHeader
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <SectionTitle>
            Câu hỏi thường gặp
          </SectionTitle>
          <SectionSubtitle>
            Giải đáp những thắc mắc phổ biến của khách hàng
          </SectionSubtitle>
        </SectionHeader>

        <FAQContainer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <FAQQuestion
                onClick={() => toggleFAQ(index)}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <QuestionText>{faq.question}</QuestionText>
                <QuestionIcon
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                >
                  {openIndex === index ? <HiChevronUp size={24} /> : <HiChevronDown size={24} />}
                </QuestionIcon>
              </FAQQuestion>
              
              <AnimatePresence>
                {openIndex === index && (
                  <FAQAnswer
                    initial={{ height: 0, opacity: 0, paddingTop: 0, paddingBottom: 0 }}
                    animate={{ height: 'auto', opacity: 1, paddingTop: '1.5rem', paddingBottom: '1.5rem' }}
                    exit={{ height: 0, opacity: 0, paddingTop: 0, paddingBottom: 0 }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                  >
                    <AnswerText>{faq.answer}</AnswerText>
                  </FAQAnswer>
                )}
              </AnimatePresence>
            </FAQItem>
          ))}
        </FAQContainer>
      </Container>
    </FAQSection>
  );
};

export default FAQ;